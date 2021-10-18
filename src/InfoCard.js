import React from 'react'
import './InfoCard.css';
import Logo1 from "./Images/loader2.jpg";

const UseEffectAPI = ({waiting,users}) => {
    return waiting ? (   
        <div className="loader_img">
            <img src={Logo1} alt="loaderimg" />
        </div>
        ) : 
        (
            <main>
                <section>
                    <div className="container">
                        {users.length &&
                        users.map((user) => {
                        return (
                            
                                <div className="user_card" key={user.id}>
                                    <div className="card">
                                    <div className="content">
                                            <div className="imgBx">
                                                <img src={user.avatar} alt="images" height="250px" />
                                            </div>
                                        <div className="contentBx">
                                            <h2>
                                                {user.first_name} {user.last_name}
                                            </h2>
                                            <a href="#">{user.email}</a>
                                        </div>
                                    </div>
                                        {/* <img src={user.avatar} alt="images"/>
                                            <div className="content">
                                                <h2>
                                                    {user.first_name} {user.last_name}
                                                </h2>
                                                <a href="#">{user.email}</a>
                                            </div> */}
                                    </div>
                                </div>
                            
                    

                            );
                    
                        })}
                    </div>
                </section>
            </main>
        
        )
}

export default UseEffectAPI;
