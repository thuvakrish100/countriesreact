import React, { Component } from 'react';



class Home extends Component {
    render(){
        return (<div>
        <Thuva/>
        </div>);
    }
}
class Thuva extends React.Component {
    render(){
        return (
        <div>
        <h1>Home Page</h1>
<div className="col-sm-6">
        <img src="https://i.ytimg.com/vi/Odh9HdPUgww/maxresdefault.jpg" width="100%" width="100%"height="50%"  />
</div>

<div className="col-sm-6">
        <img src="https://i.ytimg.com/vi/aK4JVa9aALk/maxresdefault.jpg" width="100%"height="50%" />
</div>


<div className="col-sm-6">
        <img src="http://coronadovisitorcenter.com/static/media/uploads/del_holiday.jpg" width="100%"height="50%" />
</div>

<div className="col-sm-6">
        <img src="https://us-east.manta.joyent.com/condenast/public/cnt-services/production/2015/06/03/556f1e0c9eba149914c7f3a7_london-england-cr-getty.jpg" width="100%"height="50%" />
</div>

        </div>
        );
    }
}

export default Home
