  function showtext(input_size, input_color, input_text){
    if (!document.getElementById("showText")) {
      var obj = document.createElement('div');
      obj.id = "showText";
      obj.style.position = "absolute";
      obj.style.zIndex = "9999";
      obj.draggable="true";
      obj.setAttribute("onclick", "javascript:onclickid_set(this);");
      obj.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('div/plain',event.target.id);");
      document.body.appendChild(obj);
    }
    document.getElementById("showText").style.fontSize = input_size+"px";
    document.getElementById("showText").style.color = input_color;
    document.getElementById("showText").innerHTML = input_text;
  }

  function showtext_set(input_property,input_value) {
    if (!document.getElementById("showText")) {
      var obj = document.createElement('div');
      obj.id = "showText";
      obj.style.position = "absolute";
      obj.style.zIndex = "9999";
      obj.draggable="true";
      obj.setAttribute("onclick", "javascript:onclickid_set(this);");
      obj.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('div/plain',event.target.id);");
      document.body.appendChild(obj);
    }
    
    var obj = document.getElementById("showText");
    if (input_property=="left")
      obj.style.left = input_value + "px";
    else if (input_property=="top")
      obj.style.top = input_value + "px";
    else if (input_property=="width")
      obj.style.width = input_value + "px";
    else if (input_property=="height")
      obj.style.height = input_value + "px";
    else if (input_property=="borderstyle")
      obj.style.borderStyle = input_value;
    else if (input_property=="borderwidth")
      obj.style.borderWidth = input_value + "px";
    else if (input_property=="bordercolor")
      obj.style.borderColor = input_value; 
    else if (input_property=="borderradius") {
      if (input_value.toString().toLowerCase().indexOf("px")==-1)
        obj.style.borderRadius = input_value + "px";
      else
        obj.style.borderRadius = input_value;
    }
    else if (input_property=="background")
      obj.style.background = input_value;
    else if (input_property=="color")
      obj.style.color = input_value;
    else if (input_property=="fontsize")
      obj.style.fontSize = input_value + "px";	    
    else if (input_property=="opacity")
      obj.style.opacity = input_value;    
    else if (input_property=="innerHTML")
      obj.innerHTML = input_value;      
    else if (input_property=="zindex")
      obj.style.zIndex = input_value;
    else if (input_property=="display"){ 
      if (input_value==1)
        obj.style.display = "block";    
      else if (input_value==0)
        obj.style.display = "none";
    }
    else if (input_property=="position")
      obj.style.position = input_value;		    
    else if (input_property=="disabled")
      obj.disabled = input_value;
    else if (input_property=="draggable")
      obj.draggable = input_value;		
  }
