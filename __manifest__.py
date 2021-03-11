# See LICENSE file for full copyright and licensing details.

{
    'name': "Web Widget Font",
    'category': "web",
    'version': "13.0.1.0.0",
    'license': 'LGPL-3',
    'description': """Widget to select font style in field.""",
    'summary': """Widget to select font style in field.""",
    "author": "Serpent Consulting Services Pvt. Ltd.",
    'website': 'http://www.serpentcs.com',
    'depends': ['web'],
    'data': [
        'view/web_widget_font_view.xml',
    ],
    'qweb': [
        'static/src/xml/widget.xml',
    ],
    'installable': True,
    'application': True,
    'images': ['static/description/web_widget.jpg'],
}
