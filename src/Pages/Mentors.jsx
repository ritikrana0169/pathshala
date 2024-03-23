import React from "react";
import "../Styles/Mentors.css";
import aboutschool from "../assets/aboutschool1.jpg";
import principal from "../assets/principal.jpg";
import mission from "../assets/mission.jpg";
import teacher1 from "../assets/teacher1.jpg";
import teacher2 from "../assets/teacher2.jpg";
import teacher4 from "../assets/teacher4.jpg";
const Mentors = () => {
  return (
    <div>

      <div className="learning">

        <div>
          <div>
            <h1>About <br />Our School</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, aspernatur, architecto minus fuga repellat quisquam velit beatae maiores ullam autem eos sint quas cum suscipit veniam deleniti dignissimos esse exercitationem placeat ipsa reprehenderit sequi? Laudantium fugiat nemo aspernatur molestias ut, eligendi dolore ab illum ipsam nulla quis voluptas perspiciatis voluptates at facilis dicta incidunt eos alias saepe iure. Quo similique asperiores obcaecati nulla at cumque iure </p>
          </div>
        </div>

        <div>
          <div>
            <img src={aboutschool} alt="err" />
          </div>
        </div>

      </div>

      <div className="welcome">
      <div className="hardColor">
          <div>
            <img src={principal} alt="err" />
            <h1>Principal’s Welcome</h1>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
              This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
          </div>
        </div>
        <div className="softColor">
          <div>
            <img src={mission} alt="err" />
            <h1>Mission</h1>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
              This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
          </div>
        </div>





      </div>

<div className="faculty">
  <span>
  <h1>Faculty & Mentors</h1>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, reprehenderit.
  </p>
  </span>
  <div className="cards">
  <div className="card">
  <img src={principal} alt="" srcset="" />
  <div className="blue whiteFont">
    <h1>Emily Cole</h1>
    <h3>Head of School</h3>
  </div>
</div>
<div className="card">
  <img src={principal} alt="" srcset="" />
  <div className="blueBlur">
    <h1>Emily Cole</h1>
    <h3>Head of School</h3>
  </div>
</div>
<div className="card">
  <img src={teacher1} alt="" srcset="" />
  <div className="red whiteFont">
    <h1>Emily Cole</h1>
    <h3>Head of School</h3>
  </div>
</div>
<div className="card">
  <img src={teacher2} alt="" srcset="" />
  <div className="blueBlur">
    <h1>Emily Cole</h1>
    <h3>Head of School</h3>
  </div>
</div>
<div className="card">
  <img src={teacher4} alt="" srcset="" />
  <div className="blue whiteFont">
    <h1>Emily Cole</h1>
    <h3>Head of School</h3>
  </div>
</div>
<div className="card">
  <img src={principal} alt="" srcset="" />
  <div className="blueBlur">
    <h1>Emily Cole</h1>
    <h3>Head of School</h3>
  </div>
</div>
<div className="card">
  <img src={teacher4} alt="" srcset="" />
  <div className="red whiteFont">
    <h1>Emily Cole</h1>
    <h3>Head of School</h3>
  </div>
</div>
  </div>
</div>



    </div>
  );
};

export default Mentors;
