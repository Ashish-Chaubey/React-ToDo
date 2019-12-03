import React from 'react';
import "../node_modules/font-awesome/css/font-awesome.min.css";

function TodoItem(props){
    const completedStyle = {
            fontStyle: "italic",
            color: "cdcdcd",
            textDecoration: "line-through",
}
    return(
        <div>
            <div className="row justify-content-between">
                <div className="rounded-circle border d-flex justify-content-center align-items-center" style={{ height: "40px", width: "40px" }}
                onClick={() => props.handleChange(props.item.id)}>
                    
                    <div style={{ color: "#5b75e3", fontSize: "25px" }}><i className={props.item.completed ? 'fa fa-check': null} aria-hidden="true"></i></div>
                    
                </div>
                <div className="d-flex justify-content-between align-items-center border-bottom" style={{ width: "85%" }}>
                    <div>
                        <p style={props.item.completed ? completedStyle: null}>{props.item.title}</p>
                    </div>
                    <div>
                        <p style={props.item.completed ? completedStyle: null}>{props.item.time}</p>
                    </div>
                </div>
                

            </div>
            <div className="container m-5"></div>


        </div>
    )
}
export default TodoItem