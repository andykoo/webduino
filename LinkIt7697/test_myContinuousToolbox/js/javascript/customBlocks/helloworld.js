'use strict';

//*************** Custom Blocks ******************

Blockly.Blocks['test1'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["HELLOWORLD_MSG"]);
	this.appendValueInput("message")
		.setCheck("String");
	this.setInputsInline(!0);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);		  
	this.setColour(Blockly.Msg["HELLOWORLD_HUE"]);
  }
};

Blockly.JavaScript['test1'] = function(block) {
	var message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
	var code = 'document.write(' + message + ');\n';
	return code;
};

Blockly.Blocks['test2'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["HELLOWORLD_GET"]);
	this.setInputsInline(!0);
	this.setOutput(!0);	  
	this.setColour(Blockly.Msg["HELLOWORLD_HUE"]);
  }
};

Blockly.JavaScript['test2'] = function(block) {
	Blockly.JavaScript.definitions_['messagebox'] = 'var message = "World Peace";\n';
	
	var code = "message";
	return [code, Blockly.JavaScript.ORDER_NONE];
};	


//*************** Custom Toolbox ******************
	
if (typeof toolbox_custom == 'undefined')
	var toolbox_custom = [];

toolbox_custom.push(''
+'    <category name="%{BKY_CUSTOM_NAME}" categorystyle="logic_category">'
+'      <block type="test1">'
+'			<value name="message">'
+'				<block type="text">'
+'					<field name="TEXT">Hello World</field>'
+'				</block>'
+'			</value>'
+'		</block>'
+'	  	<block type="test2"></block>'
+'    </category>'
);