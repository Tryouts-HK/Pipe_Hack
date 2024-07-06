import { Button } from "../../components/ui/button";
import { Label } from "./components/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./components/select";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { useState } from "react";
import { EvidenceCard } from "./evidencecard";

export const Comp = () => {
    const [showEvidenceCard, setShowEvidenceCard] = useState(false);

    const handleEvidenceClick = () => {
        setShowEvidenceCard(true);
    };
    return (
        <div className="w-full max-w-4xl mx-auto py-12 md:py-16 lg:py-20">
            <div className="bg-card rounded-xl shadow-lg overflow-hidden">
                <div className="px-6 py-8 md:px-10 md:py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-primary-foreground mb-2">Report Election Incident</h1>
                            <p className="text-muted-foreground">Help us address issues at the polling stations.</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <Button onClick={handleEvidenceClick} className="bg-black">Upload Evidence</Button>
                        </div>
                    </div>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="urgency">Urgency Level</Label>
                            <Select id="urgency" defaultValue="medium">
                                {({ value, onChange }) => (
                                    <>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select urgency" value={value} />
                                        </SelectTrigger>
                                        <SelectContent isOpen={false}>
                                            <SelectItem value="low" onChange={onChange}>Low</SelectItem>
                                            <SelectItem value="medium" onChange={onChange}>Medium</SelectItem>
                                            <SelectItem value="high" onChange={onChange}>High</SelectItem>
                                        </SelectContent>
                                    </>
                                )}
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="impact">Impact Level</Label>
                            <Select id="impact" defaultValue="medium">
                                {({ value, onChange }) => (
                                    <>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select impact" value={value} />
                                        </SelectTrigger>
                                        <SelectContent isOpen={false}>
                                            <SelectItem value="low" onChange={onChange}>Low</SelectItem>
                                            <SelectItem value="medium" onChange={onChange}>Medium</SelectItem>
                                            <SelectItem value="high" onChange={onChange}>High</SelectItem>
                                        </SelectContent>
                                    </>
                                )}
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="location">Location</Label>
                            <Input id="location" type="text" placeholder="Enter location" defaultValue="San Francisco, CA" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="polling-unit">Polling Unit</Label>
                            <Input id="polling-unit" type="text" placeholder="Enter polling unit" />
                        </div>
                        <div className="col-span-2 grid gap-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" rows={5} placeholder="Describe the incident in detail" />
                        </div>
                    </form>
                </div>
                <div className="bg-muted px-6 py-4 md:px-10 md:py-6 flex justify-end">
                    <Button className="bg-black">Submit Report</Button>
                </div>
            </div>
            {showEvidenceCard &&
                <div>
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                        <EvidenceCard handleShow={setShowEvidenceCard} onNext={handleEvidenceClick} />
                    </div>
                </div>
            }
        </div>
    );
};


