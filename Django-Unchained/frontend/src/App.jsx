import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
    const [details, setDetails] = useState([]);
    const [user, setUser] = useState("");
    const [quote, setQuote] = useState("");

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
                setUser("");
                setQuote("");
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className="container jumbotron ">
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
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

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Your Quote</span>
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

                <button type="submit" className="btn btn-primary mb-5">
                    Submit
                </button>
            </form>

            <hr
                style={{
                    color: "#000000",
                    backgroundColor: "#000000",
                    height: 0.5,
                    borderColor: "#000000",
                }}
            />

            {details.map((detail, id) => (
                <div key={id}>
                    <div className="card shadow-lg">
                        <div
                            className={
                                "bg-" +
                                renderSwitch(id % 6) +
                                " card-header"
                            }
                        >
                            Quote {id + 1}
                        </div>
                        <div className="card-body">
                            <blockquote
                                className={
                                    "text-" + renderSwitch(id % 6) + " blockquote mb-0"
                                }
                            >
                                <h1> {detail.detail} </h1>
                                <footer className="blockquote-footer">
                                    {" "}
                                    <cite title="Source Title">{detail.name}</cite>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                    <span className="border border-primary "></span>
                </div>
            ))}
        </div>
    );
};

export default App;
