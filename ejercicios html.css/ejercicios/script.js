function segura (){
    txt=prompt ("ingrese cadena ");
    
    nv=txt.substr(4,3);
    document.write ("<p>" + nv + "</p>");
    
    ov=txt.substring(4,8);
    document.write ("<p>" + ov + "</p>");
    }
    
    
    
    
    function segura4() {
      txt = prompt("ingrese un texto");
      {
        nv = txt.split(" ");
        document.write ( "<p>" + nv.length + "---" + nv + "</p>"); /* nv es nombre de la variable */
        ov =txt.split ("")
        document.write ( "<p>" + ov.length + "---" + ov + "</p>"); /* ov es nombre de la variable  */
      }
    }
    
    function segura3() {
      /* esta linea define la función del codigo
    que es una contraseña segura  */
      vn = prompt("ingrese numero inicial");
      num = parseInt(vn);
    
      vc = num;
      while (vc <= num + 100) {
        document.write("<p>" + vc + "</p>");
        vc = vc + 1;
      }
      document.write("<p> fin </p>");
    }
    