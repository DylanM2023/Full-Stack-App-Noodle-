import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "./navigation";

const Forum = () => {
    const [details, setDetails] = useState([]);
    const [user, setUser] = useState("");
    const [quote, setQuote] = useState("");

    useEffect(() =>{
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
    }, []);

    useEffect(() => {
        axios
            .get("http://localhost:8000/wel/")
            .then((res) => {
                setDetails(res.data);
            })
            .catch((err) => {

                console.error(err);
            });
    }, []);

    const renderSwitch = (param) => {
        switch (param + 1) {
            case 1:
                return "primary ";
            case 2:
                return "secondary";
            case 3:
                return "success";
            case 4:
                return "danger";
            case 5:
                return "warning";
            case 6:
                return "info";
            default:
                return "yellow";
        }
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        if (name === "user") {
            setUser(value);
        } else if (name === "quote") {
            setQuote(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:8000/wel/", {
                name: user,
                detail: quote,
            })
            .then(() => {
                setDetails([...details, {name:user, detail:quote}]);
                setUser("");
                setQuote("");
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <span>
                            {" "}
                            Author{" "}
                        </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name of the Poet/Author"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={user}
                        name="user"
                        onChange={handleInput}
                    />
                </div>

                <div>
                    <div>
                        <span>Your Quote</span>
                    </div>
                    <textarea
                        className="form-control "
                        aria-label="With textarea"
                        placeholder="Tell us what you think of ....."
                        value={quote}
                        name="quote"
                        onChange={handleInput}
                    ></textarea>
                </div>

                <button type="submit">
                    Submit
                </button>
            </form>
            {details.map((detail, id) => (
                <div key={id}>
                    <div>
                        <div
                            className={
                                "bg-" +
                                renderSwitch(id % 6) +
                                " card-header"
                            }
                        >
                            Quote {id + 1}
                        </div>
                        <div>
                            <blockquote
                                className={
                                    "text-" + renderSwitch(id % 6) + " blockquote mb-0"
                                }
                            >
                                <h1> {detail.detail} </h1>
                                <footer>
                                    {" "}
                                    <cite title="Source Title">{detail.name}</cite>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                    <span></span>
                </div>
            ))}
        </div>
    );
};

export default Forum;
