import Browser from '@base-cms/marko-web/browser';
import NavbarToggleButton from './navbar-toggle-button.vue';
import SearchIntegrationBing from './search-integration-bing.vue';
import SearchIntegrationGoogle from './search-integration-google.vue';
import GatedDownloadFormDotCom from './gated-download-form-dot-com.vue';
import ContactUsForm from './contact-us-form.vue';
import ReskinListener from './reskin-listener.vue';

Browser.registerComponent('NavbarToggleButton', NavbarToggleButton);
Browser.registerComponent('SearchIntegrationBing', SearchIntegrationBing);
Browser.registerComponent('SearchIntegrationGoogle', SearchIntegrationGoogle);
Browser.registerComponent('GatedDownloadFormDotCom', GatedDownloadFormDotCom);
Browser.registerComponent('ContactUsForm', ContactUsForm);
Browser.registerComponent('ReskinListener', ReskinListener);

export default Browser;
