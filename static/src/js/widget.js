odoo.define('web.web_widget_font', function(require) {
    "use strict";

    var FieldChar = require('web.basic_fields').FieldChar;
    var FieldRegistry = require('web.field_registry');

    var FieldFont = FieldChar.extend({
        template: 'FieldFont',
        widget_class: 'oe_form_field_font',

        _renderEdit: function () {
            var def = this._super.apply(this, arguments);
            if (this.mode !== 'readonly') {
                var div = this.$('a');
                var $input = this.$el.find('input');
                if (!div.length){
                    $input.fontselect();
                }
                this.$input = $input;
            }
            return def;
        }
    });
    FieldRegistry.add('font_picker', FieldFont);

    return FieldFont;
});
