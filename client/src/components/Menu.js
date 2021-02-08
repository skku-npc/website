import React, {Component} from 'react';
import './css/Menu.css';

class Menu extends Component{
    render(){
        return(
            <div>
                <div id="Menu-list"></div>
                <div id="Menu-overlay"
                onClick={function(e){
                    e.preventDefault();
                    document.getElementById("Menu-list").style.left= "-320px";
                    document.getElementById("Menu-overlay").style.display= "none";
                }}
                ></div>
                <a
                className="Menu-menu"
                onClick={function(e){
                    e.preventDefault();
                    document.getElementById("Menu-list").style.left= "0px";
                    document.getElementById("Menu-overlay").style.display= "block";
                }}
                ></a>
            </div>
            
        );
    }
}

export default Menu;