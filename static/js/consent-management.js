// Cookie Consent Management for Microsoft Clarity Consent API v2
(function() {
    'use strict';

    // Configuration
    const CONSENT_STORAGE_KEY = 'clarity_consent_preferences';
    const CONSENT_VERSION = '1.0';
    
    // Consent state
    let consentPreferences = {
        version: CONSENT_VERSION,
        analytics_storage: null, // null = not set, true = granted, false = denied
        ad_storage: null,
        timestamp: null
    };

    // Initialize consent management
    function initConsentManagement() {
        loadConsentPreferences();
        setupEventListeners();
        
        // Show consent banner if no preferences set
        if (!hasValidConsent()) {
            showConsentBanner();
        } else {
            // Apply existing consent to Clarity
            applyClarityConsent();
        }
    }

    // Load consent preferences from localStorage
    function loadConsentPreferences() {
        try {
            const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                // Check if stored consent is current version
                if (parsed.version === CONSENT_VERSION) {
                    consentPreferences = parsed;
                    return;
                }
            }
        } catch (e) {
            console.warn('Failed to load consent preferences:', e);
        }
        
        // Reset to defaults if loading failed or version mismatch
        resetConsentPreferences();
    }

    // Save consent preferences to localStorage
    function saveConsentPreferences() {
        try {
            consentPreferences.timestamp = new Date().toISOString();
            localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consentPreferences));
        } catch (e) {
            console.error('Failed to save consent preferences:', e);
        }
    }

    // Reset consent preferences to defaults
    function resetConsentPreferences() {
        consentPreferences = {
            version: CONSENT_VERSION,
            analytics_storage: null,
            ad_storage: null,
            timestamp: null
        };
    }

    // Check if we have valid consent preferences
    function hasValidConsent() {
        return consentPreferences.analytics_storage !== null && 
               consentPreferences.ad_storage !== null;
    }

    // Show the consent banner
    function showConsentBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.style.display = 'block';
            
            // Set checkbox states based on current preferences or defaults
            const analyticsCheckbox = document.getElementById('analytics-consent');
            const advertisingCheckbox = document.getElementById('advertising-consent');
            
            if (analyticsCheckbox) {
                analyticsCheckbox.checked = consentPreferences.analytics_storage !== false;
            }
            if (advertisingCheckbox) {
                advertisingCheckbox.checked = consentPreferences.ad_storage === true;
            }
        }
    }

    // Hide the consent banner
    function hideConsentBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.style.display = 'none';
        }
    }

    // Set up event listeners
    function setupEventListeners() {
        // Accept all button
        const acceptAllBtn = document.getElementById('accept-all-cookies');
        if (acceptAllBtn) {
            acceptAllBtn.addEventListener('click', function() {
                setConsent(true, true);
                hideConsentBanner();
            });
        }

        // Accept selected button
        const acceptSelectedBtn = document.getElementById('accept-selected-cookies');
        if (acceptSelectedBtn) {
            acceptSelectedBtn.addEventListener('click', function() {
                const analyticsConsent = document.getElementById('analytics-consent')?.checked || false;
                const advertisingConsent = document.getElementById('advertising-consent')?.checked || false;
                setConsent(analyticsConsent, advertisingConsent);
                hideConsentBanner();
            });
        }

        // Reject all button
        const rejectAllBtn = document.getElementById('reject-all-cookies');
        if (rejectAllBtn) {
            rejectAllBtn.addEventListener('click', function() {
                setConsent(false, false);
                hideConsentBanner();
            });
        }

        // Close banner button
        const closeBannerBtn = document.getElementById('close-consent-banner');
        if (closeBannerBtn) {
            closeBannerBtn.addEventListener('click', function() {
                hideConsentBanner();
            });
        }

        // Cookie settings button
        const cookieSettingsBtn = document.getElementById('cookie-settings-button');
        if (cookieSettingsBtn) {
            cookieSettingsBtn.addEventListener('click', function() {
                showConsentBanner();
            });
        }

        // ESC key to close banner
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                hideConsentBanner();
            }
        });
    }

    // Set consent preferences and apply to Clarity
    function setConsent(analyticsGranted, adStorageGranted) {
        consentPreferences.analytics_storage = analyticsGranted;
        consentPreferences.ad_storage = adStorageGranted;
        
        saveConsentPreferences();
        applyClarityConsent();
        
        // Trigger custom event for other scripts that might need to know about consent changes
        dispatchConsentEvent();
    }

    // Apply consent to Microsoft Clarity using Consent API v2
    function applyClarityConsent() {
        // Wait for Clarity to be available
        if (typeof window.clarity === 'function') {
            const consentData = {
                analytics_storage: consentPreferences.analytics_storage ? "granted" : "denied",
                ad_storage: consentPreferences.ad_storage ? "granted" : "denied"
            };
            
            console.log('Applying Clarity consent:', consentData);
            window.clarity('consentv2', consentData);
        } else {
            // If Clarity isn't loaded yet, wait for it
            let attempts = 0;
            const maxAttempts = 50; // 5 seconds maximum wait
            const checkInterval = setInterval(function() {
                attempts++;
                if (typeof window.clarity === 'function') {
                    clearInterval(checkInterval);
                    const consentData = {
                        analytics_storage: consentPreferences.analytics_storage ? "granted" : "denied",
                        ad_storage: consentPreferences.ad_storage ? "granted" : "denied"
                    };
                    
                    console.log('Applying Clarity consent (delayed):', consentData);
                    window.clarity('consentv2', consentData);
                } else if (attempts >= maxAttempts) {
                    clearInterval(checkInterval);
                    console.warn('Clarity not available after waiting, consent not applied');
                }
            }, 100);
        }
    }

    // Dispatch custom consent event
    function dispatchConsentEvent() {
        const event = new CustomEvent('clarityConsentUpdated', {
            detail: {
                analytics_storage: consentPreferences.analytics_storage,
                ad_storage: consentPreferences.ad_storage,
                timestamp: consentPreferences.timestamp
            }
        });
        window.dispatchEvent(event);
    }

    // Public API
    window.ClarityConsentManager = {
        // Get current consent status
        getConsent: function() {
            return {
                analytics_storage: consentPreferences.analytics_storage,
                ad_storage: consentPreferences.ad_storage,
                hasConsent: hasValidConsent()
            };
        },
        
        // Set consent programmatically
        setConsent: setConsent,
        
        // Show consent banner
        showConsentBanner: showConsentBanner,
        
        // Reset all consent (useful for testing)
        resetConsent: function() {
            resetConsentPreferences();
            saveConsentPreferences();
            
            // Reset Clarity state
            if (typeof window.clarity === 'function') {
                window.clarity('consent', false); // Erase existing cookies
            }
            
            showConsentBanner();
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initConsentManagement);
    } else {
        initConsentManagement();
    }

})();