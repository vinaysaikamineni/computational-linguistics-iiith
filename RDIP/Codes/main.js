function disp()
    {
        
        document.getElementById("intro").innerHTML = "<b>Form a scentence1(Declarative or Interogative or any other type)from given words</b><br>(select buttons in proper order)";
        document.getElementById("inp").innerHTML="";
        document.getElementById("inp2").innerHTML="";
        document.getElementById("inp3").innerHTML="";
        document.getElementById("inp4").innerHTML="";
        document.getElementById("correct").innerHTML="";
        document.getElementById("ans.correct").innerHTML="";
        document.getElementById("ans.correct1").innerHTML="";
        document.getElementById("dis.correct").innerHTML="";
        var lang = document.getElementById("lan").value;
        if( lang == "english"){
            //console.log(lang);
            var corpus = "John ate an apple before afternoon  before afternoon John ate an apple  John before afternoon ate an apple   some students like to study in the night  at night some students like to study   John and Mary went to church  Mary and John went to church   John went to church after eating  after eating John went to church  John after eating went to church   did he go to market  he did go to market   the woman who called my sister sells cosmetics  the woman who sells cosmetics called my sister  my sister who sells cosmetics called the woman  my sister who called the woman sells cosmetics   John goes to the library and studies  John studies and goes to the library   John ate an apple so did she  she ate an apple so did John   the teacher returned the book after she noticed the error  the teacher noticed the error after she returned the book  after the teacher returned the book she noticed the error  after the teacher noticed the error she returned the book  she returned the book after the teacher noticed the error  she noticed the error after the teacher returned the book  after she returned the book the teacher noticed the error  after she noticed the error the teacher returned the book   I told her that I bought a book yesterday  I told her yesterday that I bought a book  yesterday I told her that I bought a book  I bought a book that I told her yesterday  I bought a book yesterday that I told her  yesterday I bought a book that I told her";}
        else{
            var corpus = "राम और श्याम बाजार गयें  राम और श्याम गयें बाजार	बाजार गयें राम और श्याम	 गयें बाजार राम और श्याम   राम सोया और श्याम भी  श्याम सोया और राम भी  सोया श्याम और राम भी  सोया राम और श्याम भी   मैंने उसे बताया कि राम सो रहा है   मैंने उसे बताया कि सो रहा है राम  उसे मैंने बताया कि राम सो रहा है   उसे मैंने बताया कि सो रहा है राम   मैंने बताया उसे कि राम सो रहा है  मैंने बताया उसे कि सो रहा है राम  उसे बताया मैंने कि राम सो रहा है  उसे बताया मैंने कि सो रहा है राम  बताया मैंने उसे कि राम सो रहा है	 बताया मैंने उसे कि सो रहा है राम  बताया उसे मैंने कि राम सो रहा है	 बताया उसे मैंने कि सो रहा है राम   राम खाकर सोया  खाकर राम सोया  राम सोया खाकर	 खाकर सोया राम  सोया राम खाकर  सोया खाकर राम   क्या वो बाजार गया  वो क्या बाजार गया	 क्या बाजार वो गया	वो बाजार क्या गया  बाजार क्या वो गया  बाजार वो क्या गया  क्या वो गया बाजार	वो क्या गया बाजार  क्या गया वो बाजार  वो गया क्या बाजार	 गया क्या वो बाजार	गया वो क्या बाजार  गया क्या बाजार वो  क्या गया बाजार वो	 गया बाजार क्या वो	क्या बाजार गया वो  बाजार गया क्या वो  बाजार गया क्या वो	 वो बाजार गया क्या	बाजार वो गया क्या  बाजार गया वो क्या  वो गया बाजार क्या	 गया वो बाजार क्या	गया बाजार वो क्या   एक लाल किताब वहाँ है  एक लाल किताब है वहाँ  वहाँ है एक लाल किताब  है वहाँ एक लाल किताब  एक  बड़ी सी किताब वहाँ है  एक बड़ी सी किताब है वहाँ  बड़ी सी एक किताब वहाँ है	बड़ी सी एक किताब है वहाँ	 वहाँ है एक बड़ी सी किताब  वहाँ है बड़ी स एक किताब  है वहाँ एक बड़ी सी किताब  है वहाँ बड़ी सी एक किताब";
        }
        var sen = corpus.split("   ");
        var len = sen.length;
            //console.log(len);
        var index = Math.floor(Math.random()*len);
            //console.log(index);
        var eversen =sen[index].split("  ");
        var list = eversen[0].split(" ");
        //console.log(list);
        var rightsen = list.join(" ");
        //console.log(rightsen);
        var ctr = list.length, temp, index;
        while (ctr > 0)
        {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = list[ctr];
            list[ctr] = list[index];
            list[index] = temp;
        }
        var div = document.getElementById("inp2");
        var div1 = document.getElementById("inp3");
        var div2 = document.getElementById("inp4");
        var str=[];
        var check = document.createElement("input");
         check.type="button";
        check.value="CHECK SCENTENCE";
        var checkbtn = document.getElementById("correct");
        checkbtn.appendChild(check);
        checkbtn.style.display="none";
        for(var l=0;l<list.length;l++)
            {
                str.push(0);
            }
        var c=0;
        var str1="";
        for(var k =0;k<list.length;k++)
            {
                str[k] = document.createElement("input");
                str[k].type ="button";
                str[k].value = list[k];
                str[k].style.padding = "5px";
                div.appendChild(str[k]);
                str[k].onclick = function()
                {
                    document.getElementById("sentence-formed").innerHTML = "<b>Formed scentence(after selecting words)</b>";
                    var part = this.value;
                    str1+=part+" ";
                    //console.log(str1);
                    this.style.display="none";
                    //console.log(c)
                    document.getElementById("inp3").innerHTML = str1; 
                    c=c+1;
                
                    //console.log(k+"hiiii");
                //console.log(k)
                    if(c == list.length)
                        {
                            
                            checkbtn.style.display="inline";
                            check.onclick=function()
                            {
                                console.log(document.getElementById("inp3").innerHTML);
                                console.log(rightsen);
                                if((div1.innerHTML).trim() == (rightsen).trim())
                                    {    
                                         document.getElementById("ans.correct1").innerHTML = "CORRECT ANSWER<br>";
                                     }
                                    else
                                    {
                                        document.getElementById("ans.correct1").innerHTML = "WRONG ANSWER<br>";
                                        var inc = document.createElement("input");
                                        inc.type="button";
                                        inc.value="Get Correct sentence";
                                        document.getElementById("ans.correct1").appendChild(inc);
                                        inc.onclick=function()
                                        {
                                            document.getElementById("dis.correct").innerHTML= eversen.join("<br>");
                                            var anbtn = document.createElement("input");
                                            anbtn.type="button";
                                            anbtn.value="Hide the correct Answer";
                                            this.style.display="none";
                                            document.getElementById("ans.correct1").appendChild(anbtn);
                                            anbtn.onclick=function(){
                                                document.getElementById("dis.correct").innerHTML="";
                                                this.style.display="none";
                                                inc.style.display="inline";
                                            }
                                        }
                                    }
                            }
                        }
                }
            }
        //console.log(c);        
        var reform = document.getElementById("inp4");
        var rebtn = document.createElement("input");
        rebtn.type = "button";
        rebtn.value="REFORM SCENTENCE";
        //console.log("HII");
        div2.appendChild(rebtn);
        rebtn.onclick=function()
        {
            alert(c+" words are selected");
            div1.innerHTML="";
            c=0;
            console.log(c+" hi");
            //div.innerHTML="";
            document.getElementById("sentence-formed").innerHTML = "";
            //document.getElementById("correct").innerHTML = "";
            document.getElementById("ans.correct1").innerHTML = "";
            var my = document.getElementById("correct");
            my.style.display="none";
            document.getElementById("dis.correct").innerHTML = "";
            console.log("dis");
            str1="";
            for(var l=0;l<list.length;l++)
                {
                        str[l].style.display="inline";
                }
            console.log("final "+ c)
            
        }
    }