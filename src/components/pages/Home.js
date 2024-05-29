import React from "react";
import Slider from "../inc/Slider";
import { Link } from "react-router-dom";


function Home(){
     return(
        
              <div>
                
                <div>
                    <Slider/>
                    <div>
                        <h1 className="mealstext-center">Meals for 2dayy</h1>
                        <p className="text-center">A small reminder that nutritious choices make a big difference.
                         Swap out those chips for some crunchy carrot sticks today!</p>
                        </div>
                        <div className="row">
                    </div>
                      <Link to="/about" className="btn btn-warning shadow">Read More</Link>

              
                      <div>
                        <h1 className="mealstext-center">Weekly Challenge</h1>
                        <p className="text-center">Drink More Water! Keep track of your daily water intake.
                         Aim for at least 8 glasses each day. Hydration is key to a healthy body and mind.</p>
                             </div>
                            <div className="row">
                          </div>
                     </div> 

                     </div>
                 
         );
}
export default Home;