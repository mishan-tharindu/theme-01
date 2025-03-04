(function ($) {
	FLBuilder.registerModuleHelper("numbers", {
		init: function () {
			var form = $(".fl-builder-settings");

			this._toggleMaxNumber();
			form.find("select[name=layout]").on("change", this._toggleMaxNumber);
			form.find("select[name=number_type]").on("change", this._toggleMaxNumber);

			this._toggleNumberControls();
			form
				.find("select[name=layout]")
				.on("change", this._toggleNumberControls);
			form
				.find("select[name=number_position]")
				.on("change", this._toggleNumberControls);

			this._validateNumber();
			form
				.find("input[name=number]")
				.bind("keyup mouseup", this._validateNumber);
		},

		_toggleMaxNumber: function () {
			var form = $(".fl-builder-settings"),
				layout = form.find("select[name=layout]").val(),
				numberType = form.find("select[name=number_type]").val(),
				maxNumber = form.find("#fl-field-max_number");

			if ("default" == layout) {
				maxNumber.hide();
			} else if ("standard" == numberType) {
				maxNumber.show();
			} else {
				maxNumber.hide();
			}
		},

		_toggleNumberControls: function () {
			var form = $(".fl-builder-settings"),
				layout = form.find("select[name=layout]").val(),
				numberPosition = form.find("select[name=number_position]").val(),
				numberPrefix = form.find("#fl-field-number_prefix"),
				numberSuffix = form.find("#fl-field-number_suffix"),
				numberColor = form.find("#fl-field-number_color"),
				numberSize = form.find("#fl-field-number_size");

			if ("bars" == layout && "hidden" == numberPosition) {
				numberPrefix.hide();
				numberSuffix.hide();
				numberColor.hide();
				numberSize.hide();
			} else {
				numberPrefix.show();
				numberSuffix.show();
				numberColor.show();
				numberSize.show();
			}
		},

		_validateNumber: function () {
			var form = $(".fl-builder-settings"),
				numberInput = form.find("input[name=number]");

			number = numberInput.val();

			// Match -00 or 00.4 which are invalid
			if (number.match(/^-?(0)\1+\.?/)) {
				numberInput.val("100");
				return false;
			}

			// if field is blank dont check if its a number
			if ("" === number) {
				return false;
			}

			// Finaly if number is invalid set to 100, the default
			if (!$.isNumeric(number)) {
				numberInput.val("100");
			}
		},
	});
})(jQuery);
