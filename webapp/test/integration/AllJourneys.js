jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Products in the list
// * All 3 Products have at least one Order_Details

sap.ui.require([
	"sap/ui/test/Opa5",
	"git/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"git/test/integration/pages/App",
	"git/test/integration/pages/Browser",
	"git/test/integration/pages/Master",
	"git/test/integration/pages/Detail",
	"git/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "git.view."
	});

	sap.ui.require([
		"git/test/integration/MasterJourney",
		"git/test/integration/NavigationJourney",
		"git/test/integration/NotFoundJourney",
		"git/test/integration/BusyJourney",
		"git/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});