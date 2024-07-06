import React from "react";
// import Card from "../searchcard";  // Adjust the import based on how CardProps is exported
import { Button } from "../../../components/ui/button";

export const SocialScore: React.FC = () => {
    return (
        <div>
            <div>
                <div className="p-4 flex flex-col gap-4 hover:bg-accent hover:text-accent-foreground transition-colors">
                    <div>
                        <div className="text-lg font-bold">Police</div>
                        <p className="text-muted-foreground">"I need police assistance immediately. My location is..."</p>
                        <Button>Send Message</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};


