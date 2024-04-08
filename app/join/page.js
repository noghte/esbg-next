import React from "react";
import { useForm } from "react-hook-form";

const Join = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        
        formData.append("access_key", process.env.WEB3FORMS_ACCESS_KEY);
        formData.append("name", data.name);
        formData.append("file", data.file[0]);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
        
        if (res.success) {
            console.log("Success", res);
        } else {
            console.log("Error", res);
        }
    };

    return (
        <div>
            <div className="wrapper style1">
                <section id="main" className="container">
                    <header className="major">
                        <h2>Submit CV</h2>
                    </header>
                    <div id="page-wrapper">
                        <section className="box">
                            <h3>Postdoctoral Position:</h3>
                            <blockquote>Post-doctoral positions are available to investigate the regulatory mechanisms of protein kinases using computational and experimental techniques. Research experience in molecular biology, molecular evolution, genomics, structural biology or bioinformatics is required. Experience in applying sequence analysis and standard computational tools in a Linux/Unix environment is desirable, but not required.
                                We are an inter-disciplinary research group interested in using the evolutionary information embedded in genomic sequences to understand how signaling proteins, such as protein kinases, work. For more information on what we do, visit our homepage.
                            </blockquote>

                            <hr />

                            <h3>Undergraduate Positions:</h3>
                            <blockquote>Interested in research training in the areas of cancer biology, cell signalling, biochemistry and molecular biology? The Evolutionary Systems Biology Group is seeking enthusiastic undergraduates to work in our laboratory. We are interested in students who can spend at least 5-6 semesters in the lab.
                            </blockquote>
                        </section>
                    </div>
                </section>
            </div>

            <div className="wrapper style1">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" {...register("name")} />
                    </div>
                    <div>
                        <label htmlFor="file">CV File:</label>
                        <input type="file" id="file" {...register("file")} />
                    </div>
                    <div>
                        <input type="submit" value="Submit CV" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Join;
