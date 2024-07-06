import { useState } from "react";
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Label } from "../Complaints/components/label"
import { UploadCard } from "./upcard";

export const Up = () => {
    const [showUploadCard, setShowUploadCard] = useState(false);

    const handleUploadClick = () => {
        setShowUploadCard(true);
    };
    return (
        <div className="w-full max-w-4xl mx-auto py-12 md:py-16 lg:py-20">
            <div className="bg-card rounded-xl shadow-lg overflow-hidden">
                <div className="px-6 py-8 md:px-10 md:py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-primary-foreground mb-2">Upload Election Result</h1>
                            <p className="text-muted-foreground">Help us share results and feedback from the polling stations.</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <Button
                                onClick={handleUploadClick}
                                className="bg-black">Upload Results</Button>
                        </div>
                    </div>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="location">Location</Label>
                            <Input id="location" type="text" placeholder="Enter location" defaultValue="San Francisco, CA" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="polling-unit">Polling Unit</Label>
                            <Input id="polling-unit" type="text" placeholder="Enter polling unit" />
                        </div>
                        <div className="col-span-2 grid gap-2">
                            <Label htmlFor="description">Feedback</Label>
                            <Textarea id="description" rows={5} placeholder="Describe the happenings in detail" />
                        </div>
                    </form>
                </div>
                <div className="bg-muted px-6 py-4 md:px-10 md:py-6 flex justify-end">
                    <Button className="bg-black">Submit Result</Button>
                </div>
            </div>
            {showUploadCard &&
                <div>
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                        <UploadCard handleShow={setShowUploadCard} onNext={handleUploadClick} />
                    </div>
                </div>
            }
        </div>
    );
};

