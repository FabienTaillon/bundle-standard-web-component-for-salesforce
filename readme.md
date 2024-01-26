# QR Code
This is a sample repo to demo how to bundle a standard web component for use in Salesforce.  
This is linked to this sample Salesforce project: https://github.com/FabienTaillon/standard-web-component-in-salesforce  
The web component used here is coming from: https://shoelace.style/components/qr-code

## Bundling
According to Salesforce documentation you have to ways to use a third-party web component in Salesforce:

* Upload a third-party web component as a static resource. Load the component using the loadScript method from the lightning/platformResourceLoader module. Then, add the custom element to your template using lwc:external. You can upload up to 5 MB per static resource. An org can have up to 250 MB of static resources.
* Add a third-party web component as an LWC module with a .js-meta.xml configuration file. A component's JavaScript file can have a maximum file size of 128 KB.

https://help.salesforce.com/s/articleView?id=release-notes.rn_lwc_external.htm&release=246&type=5

Bundling can be done very easily with [rollup](https://rollupjs.org/).

### Bundling for Static Resource
* `npm install`
* `npm run build-static-resource`

Rollup config is [here](./rollup.config.static-resource.js).

### Bundling for LWC Module
* `npm install`
* `npm run build-lwc-module`

Rollup config is [here](./rollup.config.lwc-module.js).