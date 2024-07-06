"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "../../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";
import { Button } from "../../components/ui/button";

export const FinalProfile = () => {
    const [activeTab, setActiveTab] = useState("personal-info");
    const handleChange = (value: string) => {
        setActiveTab(value);
        activeTab;
    }

    return (
        <Card className="w-full max-w-3xl mx-auto shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105">
            <CardHeader className="bg-primary text-primary-foreground flex items-center gap-4 p-4">
                <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                    <h3 className="text-xl font-bold">John Doe</h3>
                    <p className="text-sm text-muted-foreground">john@example.com</p>
                </div>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="personal-info">
                    <TabsList>
                        <TabsTrigger value="personal-info" handleChange={handleChange}>Personal Info</TabsTrigger>
                        <TabsTrigger value="security" handleChange={handleChange}>Security</TabsTrigger>
                        <TabsTrigger value="notifications" handleChange={handleChange}>Notifications</TabsTrigger>
                    </TabsList>
                    <TabsContent value="personal-info">
                        <div className="grid gap-6 py-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" defaultValue="John Doe" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" defaultValue="john@example.com" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <Label htmlFor="phone">Phone</Label>
                                    <Input id="phone" type="tel" defaultValue="+1 (555) 555-5555" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="profile-picture">Profile Picture</Label>
                                    <Input id="profile-picture" type="file" />
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="security">
                        <div className="grid gap-6 py-6">
                            <div className="space-y-1">
                                <Label htmlFor="current-password">Current Password</Label>
                                <Input id="current-password" type="password" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new-password">New Password</Label>
                                <Input id="new-password" type="password" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="confirm-password">Confirm Password</Label>
                                <Input id="confirm-password" type="password" />
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="notifications">
                        <div className="grid gap-6 py-6">
                            <div className="flex items-center gap-2">
                                <Checkbox id="email-notifications" label="Email Notifications" checked={true} onChange={() => { }} />
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="push-notifications" label="Push Notifications" checked={true} onChange={() => { }} />
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="sms-notifications" label="SMS Notifications" checked={false} onChange={() => { }} />
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
            <CardFooter className="flex justify-end gap-2 p-4">
                <Button variant="outline">Cancel</Button>
                <Button type="submit">Save Changes</Button>
            </CardFooter>
        </Card>
    );
};

export default FinalProfile;
