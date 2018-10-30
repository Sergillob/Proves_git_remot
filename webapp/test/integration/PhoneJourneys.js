jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"git/test/integration/NavigationJourneyPhone",
		"git/test/integration/NotFoundJourneyPhone",
		"git/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});