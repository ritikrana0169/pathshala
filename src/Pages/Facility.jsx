import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Facility.css"
import learningPic from "../assets/learning1.jpg";
import facility1 from "../assets/facility1.jpg";
import facility2 from "../assets/facility2.jpg";
import facility3 from "../assets/facility3.jpg";
import facility4 from "../assets/facility4.jpg";

const Facility = () => {
  return (<div>
    <div className="learning">

      <div>
        <div>
          <h1>Learning</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, aspernatur, architecto minus fuga repellat quisquam velit beatae maiores ullam autem eos sint quas cum suscipit veniam deleniti dignissimos esse exercitationem placeat ipsa reprehenderit sequi? Laudantium fugiat nemo aspernatur molestias ut, eligendi dolore ab illum ipsam nulla quis voluptas perspiciatis voluptates at facilis dicta incidunt eos alias saepe iure. Quo similique asperiores obcaecati nulla at cumque iure </p>
        </div>
      </div>

      <div>
        <div>
          <img src={learningPic} alt="err" />
        </div>
      </div>

    </div>



    <div className="facility">
      <div>
        <div>
          <h1>
            Online Classes for All
          </h1>
        </div>
      </div>
      <div>
        <div>
          <img src={facility1} alt="img Error" />
        </div>
      </div>
      <div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga alias ratione saepe quas molestias totam sapiente, quasi, deserunt quod maxime laboriosam aspernatur dolor suscipit inventore.
          </p>
        </div>
      </div>
    </div>

    <div className="facility blue marginTop">
      <div>
        <div>
          <h1>
          Pre-K and K
          </h1>
        </div>
      </div>
      <div>
        <div>
          <img src={facility2} alt="img Error" />
        </div>
      </div>
      <div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga alias ratione saepe quas molestias totam sapiente, quasi, deserunt quod maxime laboriosam aspernatur dolor suscipit inventore. 
          </p>
        </div>
      </div>
    </div>

    <div className="facility marginTop">
      <div>
        <div>
          <h1>
          Grades 1-4
          </h1>
        </div>
      </div>
      <div>
        <div>
          <img src={facility3} alt="img Error" />
        </div>
      </div>
      <div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga alias ratione saepe quas molestias totam sapiente, quasi, deserunt quod maxime laboriosam aspernatur dolor suscipit inventore.
          </p>
        </div>
      </div>
    </div>

    <div className="facility blue marginTop marginBottom ">
      <div>
        <div>
          <h1>
          Grades 5-8
          </h1>
        </div>
      </div>
      <div>
        <div>
          <img src={facility4} alt="img Error" />
        </div>
      </div>
      <div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga alias ratione saepe quas molestias totam sapiente, quasi, deserunt quod maxime laboriosam aspernatur dolor suscipit inventore. 
          </p>
        </div>
      </div>
    </div>


  </div>);
};

export default Facility;
