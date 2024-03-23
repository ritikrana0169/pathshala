import React from "react";
import "../Styles/Event.css";
import eventandnews from "../assets/eventAndNews.jpg";

const EventPage = () => {
  return (
    <div>
     <div className="learning">

<div>
  <div>
    <h1 className="blueFont">News <br/> & Events</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, aspernatur, architecto minus fuga repellat quisquam velit beatae maiores ullam autem eos sint quas cum suscipit veniam deleniti dignissimos esse exercitationem placeat ipsa reprehenderit sequi? Laudantium fugiat nemo aspernatur molestias ut, eligendi dolore ab illum ipsam nulla quis voluptas perspiciatis voluptates at facilis dicta incidunt eos alias saepe iure. Quo similique asperiores obcaecati nulla at cumque iure </p>
  </div>
</div>

<div>
  <div>
    <img src={eventandnews} alt="err" />
  </div>
</div>

</div>
    </div>
  );
};

export default EventPage;
