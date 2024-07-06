// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/88OD0avZL6A
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Separator } from "@/components/ui/separator"
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

// export default function Component() {
//   return (
//     <div className="container mx-auto py-8 px-4 md:px-6">
//       <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
//         <div className="bg-background rounded-lg shadow-md p-6">
//           <h2 className="text-2xl font-bold mb-4">Create a New Group</h2>
//           <form className="space-y-4">
//             <div>
//               <Label htmlFor="group-name">Group Name</Label>
//               <Input id="group-name" placeholder="Enter group name" />
//             </div>
//             <div>
//               <Label htmlFor="group-description">Description</Label>
//               <Textarea id="group-description" rows={3} placeholder="Enter group description" />
//             </div>
//             <div>
//               <Label htmlFor="group-tags">Tags</Label>
//               <Input id="group-tags" placeholder="Enter tags separated by commas" />
//             </div>
//             <Button type="submit" className="w-full">
//               Create Group
//             </Button>
//           </form>
//         </div>
//         <div className="space-y-4">
//           <h2 className="text-2xl font-bold">Existing Groups</h2>
//           <div className="space-y-4">
//             <Card className="p-4">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h3 className="text-lg font-bold">Election Polling Unit Group</h3>
//                   <p className="text-muted-foreground">Discuss and collaborate on election polling units.</p>
//                 </div>
//                 <div className="text-muted-foreground">
//                   <UsersIcon className="w-5 h-5 mr-1 inline" /> 50 members
//                 </div>
//               </div>
//               <Separator className="my-4" />
//               <div className="space-y-4">
//                 <div>
//                   <h4 className="text-lg font-bold mb-2">Discussion</h4>
//                   <div className="space-y-4">
//                     <div className="flex items-start gap-4">
//                       <Avatar>
//                         <AvatarImage src="/placeholder-user.jpg" />
//                         <AvatarFallback>JD</AvatarFallback>
//                       </Avatar>
//                       <div className="flex-1">
//                         <div className="flex items-center justify-between">
//                           <div className="font-medium">John Doe</div>
//                           <div className="text-muted-foreground text-sm">2 hours ago</div>
//                         </div>
//                         <p>
//                           Hey everyone, I have a question about the polling unit in my area. #elections #pollingunit
//                         </p>
//                         <div className="flex items-center gap-2 mt-2">
//                           <Button variant="ghost" size="icon">
//                             <MessageCircleIcon className="w-4 h-4" />
//                             <span className="sr-only">Reply</span>
//                           </Button>
//                           <Button variant="ghost" size="icon">
//                             <ThumbsUpIcon className="w-4 h-4" />
//                             <span className="sr-only">Like</span>
//                           </Button>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex items-start gap-4">
//                       <Avatar>
//                         <AvatarImage src="/placeholder-user.jpg" />
//                         <AvatarFallback>SA</AvatarFallback>
//                       </Avatar>
//                       <div className="flex-1">
//                         <div className="flex items-center justify-between">
//                           <div className="font-medium">Sarah Anderson</div>
//                           <div className="text-muted-foreground text-sm">1 hour ago</div>
//                         </div>
//                         <p>
//                           Hi John, I can help you with that. The polling unit in your area is located at 123 Main St.
//                           #elections #pollinginfo
//                         </p>
//                         <div className="flex items-center gap-2 mt-2">
//                           <Button variant="ghost" size="icon">
//                             <MessageCircleIcon className="w-4 h-4" />
//                             <span className="sr-only">Reply</span>
//                           </Button>
//                           <Button variant="ghost" size="icon">
//                             <ThumbsUpIcon className="w-4 h-4" />
//                             <span className="sr-only">Like</span>
//                           </Button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-bold mb-2">Group Members</h4>
//                   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                     <div className="flex items-center gap-2">
//                       <Avatar>
//                         <AvatarImage src="/placeholder-user.jpg" />
//                         <AvatarFallback>JD</AvatarFallback>
//                       </Avatar>
//                       <div>
//                         <div className="font-medium">John Doe</div>
//                         <div className="text-muted-foreground text-sm">Member</div>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Avatar>
//                         <AvatarImage src="/placeholder-user.jpg" />
//                         <AvatarFallback>SA</AvatarFallback>
//                       </Avatar>
//                       <div>
//                         <div className="font-medium">Sarah Anderson</div>
//                         <div className="text-muted-foreground text-sm">Member</div>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Avatar>
//                         <AvatarImage src="/placeholder-user.jpg" />
//                         <AvatarFallback>MJ</AvatarFallback>
//                       </Avatar>
//                       <div>
//                         <div className="font-medium">Michael Johnson</div>
//                         <div className="text-muted-foreground text-sm">Admin</div>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Avatar>
//                         <AvatarImage src="/placeholder-user.jpg" />
//                         <AvatarFallback>EW</AvatarFallback>
//                       </Avatar>
//                       <div>
//                         <div className="font-medium">Emily Wilson</div>
//                         <div className="text-muted-foreground text-sm">Member</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-bold mb-2">Moderation Tools</h4>
//                   <div className="flex items-center gap-2">
//                     <Button variant="outline" size="sm">
//                       <SettingsIcon className="w-4 h-4 mr-2" />
//                       Group Settings
//                     </Button>
//                     <Button variant="outline" size="sm">
//                       <UsersIcon className="w-4 h-4 mr-2" />
//                       Manage Members
//                     </Button>
//                     <Button variant="outline" size="sm">
//                       <FileWarningIcon className="w-4 h-4 mr-2" />
//                       Moderate Content
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//             <Card className="p-4">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h3 className="text-lg font-bold">Election Monitoring Group</h3>
//                   <p className="text-muted-foreground">Discuss and collaborate on election monitoring efforts.</p>
//                 </div>
//                 <div className="text-muted-foreground">
//                   <UsersIcon className="w-5 h-5 mr-1 inline" /> 75 members
//                 </div>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// function FileWarningIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
//       <path d="M12 9v4" />
//       <path d="M12 17h.01" />
//     </svg>
//   )
// }


// function MessageCircleIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
//     </svg>
//   )
// }


// function SettingsIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
//       <circle cx="12" cy="12" r="3" />
//     </svg>
//   )
// }


// function ThumbsUpIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M7 10v12" />
//       <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
//     </svg>
//   )
// }


// function UsersIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//       <circle cx="9" cy="7" r="4" />
//       <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//       <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//     </svg>
//   )
// }


// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/mQUmsLhWVaT
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
// import Link from "next/link"

// export default function Component() {
//   return (
//     <div className="flex flex-col min-h-[100dvh]">
//       <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
//         <div className="container max-w-5xl mx-auto flex items-center justify-between">
//           <div>
//             <h1 className="text-2xl font-bold">Election Discussion Group</h1>
//             <p className="text-sm text-primary-foreground/80">
//               Discuss the latest election news and updates with your community.
//             </p>
//           </div>
//           <div className="flex items-center gap-4">
//             <Button variant="secondary">Join Group</Button>
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" size="icon">
//                   <MoveHorizontalIcon className="w-5 h-5" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end">
//                 <DropdownMenuItem>
//                   <SettingsIcon className="w-4 h-4 mr-2" />
//                   Group Settings
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <UsersIcon className="w-4 h-4 mr-2" />
//                   Manage Members
//                 </DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>
//                   <LogOutIcon className="w-4 h-4 mr-2" />
//                   Leave Group
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </div>
//       </header>
//       <main className="flex-1 bg-background">
//         <div className="container max-w-5xl mx-auto py-8 px-4 md:px-6">
//           <div className="grid gap-8">
//             <div>
//               <h2 className="text-xl font-bold mb-4">Latest Updates</h2>
//               <div className="space-y-6">
//                 <div className="bg-card p-4 rounded-md shadow">
//                   <div className="flex items-start gap-4">
//                     <Avatar className="shrink-0">
//                       <AvatarImage src="/placeholder-user.jpg" />
//                       <AvatarFallback>JD</AvatarFallback>
//                     </Avatar>
//                     <div className="flex-1">
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <h3 className="font-medium">John Doe</h3>
//                           <p className="text-sm text-muted-foreground">2 hours ago</p>
//                         </div>
//                         <Button variant="ghost" size="icon">
//                           <MoveHorizontalIcon className="w-4 h-4" />
//                         </Button>
//                       </div>
//                       <p className="mt-2">
//                         Just cast my vote for the local elections. Encourage everyone to participate and make their
//                         voice heard!
//                       </p>
//                       <div className="mt-2 flex items-center gap-2">
//                         <span className="bg-muted px-2 py-1 rounded-md text-xs">#elections</span>
//                         <span className="bg-muted px-2 py-1 rounded-md text-xs">#voting</span>
//                         <span className="bg-muted px-2 py-1 rounded-md text-xs">#community</span>
//                       </div>
//                       <div className="mt-4 flex items-center gap-4">
//                         <Button variant="ghost" size="icon">
//                           <HeartIcon className="w-4 h-4" />
//                           <span className="sr-only">Like</span>
//                         </Button>
//                         <Button variant="ghost" size="icon">
//                           <MessageCircleIcon className="w-4 h-4" />
//                           <span className="sr-only">Comment</span>
//                         </Button>
//                         <Button variant="ghost" size="icon">
//                           <ShareIcon className="w-4 h-4" />
//                           <span className="sr-only">Share</span>
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bg-card p-4 rounded-md shadow">
//                   <div className="flex items-start gap-4">
//                     <Avatar className="shrink-0">
//                       <AvatarImage src="/placeholder-user.jpg" />
//                       <AvatarFallback>JS</AvatarFallback>
//                     </Avatar>
//                     <div className="flex-1">
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <h3 className="font-medium">Jane Smith</h3>
//                           <p className="text-sm text-muted-foreground">1 day ago</p>
//                         </div>
//                         <Button variant="ghost" size="icon">
//                           <MoveHorizontalIcon className="w-4 h-4" />
//                         </Button>
//                       </div>
//                       <p className="mt-2">
//                         Excited to see the high voter turnout in our local elections. Let's keep the momentum going!
//                       </p>
//                       <div className="mt-2 flex items-center gap-2">
//                         <span className="bg-muted px-2 py-1 rounded-md text-xs">#elections</span>
//                         <span className="bg-muted px-2 py-1 rounded-md text-xs">#community</span>
//                       </div>
//                       <div className="mt-4 flex items-center gap-4">
//                         <Button variant="ghost" size="icon">
//                           <HeartIcon className="w-4 h-4" />
//                           <span className="sr-only">Like</span>
//                         </Button>
//                         <Button variant="ghost" size="icon">
//                           <MessageCircleIcon className="w-4 h-4" />
//                           <span className="sr-only">Comment</span>
//                         </Button>
//                         <Button variant="ghost" size="icon">
//                           <ShareIcon className="w-4 h-4" />
//                           <span className="sr-only">Share</span>
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h2 className="text-xl font-bold mb-4">Recent Comments</h2>
//               <div className="space-y-4">
//                 <div className="bg-card p-4 rounded-md shadow">
//                   <div className="flex items-start gap-4">
//                     <Avatar className="shrink-0">
//                       <AvatarImage src="/placeholder-user.jpg" />
//                       <AvatarFallback>MJ</AvatarFallback>
//                     </Avatar>
//                     <div className="flex-1">
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <h3 className="font-medium">Michael Johnson</h3>
//                           <p className="text-sm text-muted-foreground">3 hours ago</p>
//                         </div>
//                         <Button variant="ghost" size="icon">
//                           <MoveHorizontalIcon className="w-4 h-4" />
//                         </Button>
//                       </div>
//                       <p className="mt-2">
//                         Great to see the community coming together for these elections. Let's keep the momentum going!
//                       </p>
//                       <div className="mt-4 flex items-center gap-4">
//                         <Button variant="ghost" size="icon">
//                           <HeartIcon className="w-4 h-4" />
//                           <span className="sr-only">Like</span>
//                         </Button>
//                         <Button variant="ghost" size="icon">
//                           <MessageCircleIcon className="w-4 h-4" />
//                           <span className="sr-only">Reply</span>
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bg-card p-4 rounded-md shadow">
//                   <div className="flex items-start gap-4">
//                     <Avatar className="shrink-0">
//                       <AvatarImage src="/placeholder-user.jpg" />
//                       <AvatarFallback>SL</AvatarFallback>
//                     </Avatar>
//                     <div className="flex-1">
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <h3 className="font-medium">Sarah Lee</h3>
//                           <p className="text-sm text-muted-foreground">6 hours ago</p>
//                         </div>
//                         <Button variant="ghost" size="icon">
//                           <MoveHorizontalIcon className="w-4 h-4" />
//                         </Button>
//                       </div>
//                       <p className="mt-2">
//                         I'm excited to see the changes our new representatives will bring to our community. Let's stay
//                         engaged and hold them accountable.
//                       </p>
//                       <div className="mt-4 flex items-center gap-4">
//                         <Button variant="ghost" size="icon">
//                           <HeartIcon className="w-4 h-4" />
//                           <span className="sr-only">Like</span>
//                         </Button>
//                         <Button variant="ghost" size="icon">
//                           <MessageCircleIcon className="w-4 h-4" />
//                           <span className="sr-only">Reply</span>
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//       <footer className="bg-muted p-6 md:py-12 w-full">
//         <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
//           <div className="grid gap-1">
//             <h3 className="font-semibold">Company</h3>
//             <Link href="#" prefetch={false}>
//               About Us
//             </Link>
//             <Link href="#" prefetch={false}>
//               Our Team
//             </Link>
//             <Link href="#" prefetch={false}>
//               Careers
//             </Link>
//             <Link href="#" prefetch={false}>
//               News
//             </Link>
//           </div>
//           <div className="grid gap-1">
//             <h3 className="font-semibold">Products</h3>
//             <Link href="#" prefetch={false}>
//               Men
//             </Link>
//             <Link href="#" prefetch={false}>
//               Women
//             </Link>
//             <Link href="#" prefetch={false}>
//               Kids
//             </Link>
//             <Link href="#" prefetch={false}>
//               Accessories
//             </Link>
//           </div>
//           <div className="grid gap-1">
//             <h3 className="font-semibold">Resources</h3>
//             <Link href="#" prefetch={false}>
//               Blog
//             </Link>
//             <Link href="#" prefetch={false}>
//               Community
//             </Link>
//             <Link href="#" prefetch={false}>
//               Support
//             </Link>
//             <Link href="#" prefetch={false}>
//               FAQs
//             </Link>
//           </div>
//           <div className="grid gap-1">
//             <h3 className="font-semibold">Legal</h3>
//             <Link href="#" prefetch={false}>
//               Privacy Policy
//             </Link>
//             <Link href="#" prefetch={false}>
//               Terms of Service
//             </Link>
//             <Link href="#" prefetch={false}>
//               Cookie Policy
//             </Link>
//           </div>
//           <div className="grid gap-1">
//             <h3 className="font-semibold">Contact</h3>
//             <Link href="#" prefetch={false}>
//               Support
//             </Link>
//             <Link href="#" prefetch={false}>
//               Sales
//             </Link>
//             <Link href="#" prefetch={false}>
//               Press
//             </Link>
//             <Link href="#" prefetch={false}>
//               Partnerships
//             </Link>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

// function HeartIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
//     </svg>
//   )
// }


// function LogOutIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
//       <polyline points="16 17 21 12 16 7" />
//       <line x1="21" x2="9" y1="12" y2="12" />
//     </svg>
//   )
// }


// function MessageCircleIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
//     </svg>
//   )
// }


// function MoveHorizontalIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polyline points="18 8 22 12 18 16" />
//       <polyline points="6 8 2 12 6 16" />
//       <line x1="2" x2="22" y1="12" y2="12" />
//     </svg>
//   )
// }


// function SettingsIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
//       <circle cx="12" cy="12" r="3" />
//     </svg>
//   )
// }


// function ShareIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
//       <polyline points="16 6 12 2 8 6" />
//       <line x1="12" x2="12" y1="2" y2="15" />
//     </svg>
//   )
// }


// function UsersIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//       <circle cx="9" cy="7" r="4" />
//       <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//       <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//     </svg>
//   )
// }



// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/RD2ge5CKlgc
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import { Button } from "@/components/ui/button"
// import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
// import { Separator } from "@/components/ui/separator"

// export default function Component() {
//   return (
//     <div className="flex flex-col h-full">
//       <header className="bg-background border-b px-4 py-3 flex items-center justify-between">
//         <h1 className="text-2xl font-bold">Polling Unit Groups</h1>
//         <Button>Create Group</Button>
//       </header>
//       <div className="flex-1 grid grid-cols-[280px_1fr] gap-8 p-8">
//         <div className="space-y-8">
//           <Card>
//             <CardHeader>
//               <CardTitle>Create a New Group</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <form className="space-y-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="group-name">Group Name</Label>
//                   <Input id="group-name" placeholder="Enter group name" />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="group-description">Description</Label>
//                   <Textarea id="group-description" placeholder="Enter group description" className="min-h-[100px]" />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="group-tags">Tags</Label>
//                   <Input id="group-tags" placeholder="Enter tags (separated by commas)" />
//                 </div>
//                 <Button type="submit">Create Group</Button>
//               </form>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader>
//               <CardTitle>Groups</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="font-semibold">Polling Unit A</h3>
//                     <p className="text-muted-foreground">Discussion group for Polling Unit A</p>
//                   </div>
//                   <div className="text-muted-foreground">
//                     <UsersIcon className="w-4 h-4 mr-1 inline" />
//                     125 members
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="font-semibold">Polling Unit B</h3>
//                     <p className="text-muted-foreground">Discussion group for Polling Unit B</p>
//                   </div>
//                   <div className="text-muted-foreground">
//                     <UsersIcon className="w-4 h-4 mr-1 inline" />
//                     78 members
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="font-semibold">Polling Unit C</h3>
//                     <p className="text-muted-foreground">Discussion group for Polling Unit C</p>
//                   </div>
//                   <div className="text-muted-foreground">
//                     <UsersIcon className="w-4 h-4 mr-1 inline" />
//                     92 members
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//         <div className="space-y-8">
//           <Card>
//             <CardHeader>
//               <CardTitle>Polling Unit A</CardTitle>
//               <CardDescription>Discussion group for Polling Unit A</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-4">
//                   <Avatar>
//                     <AvatarImage src="/placeholder-user.jpg" />
//                     <AvatarFallback>JD</AvatarFallback>
//                   </Avatar>
//                   <div>
//                     <h4 className="font-semibold">John Doe</h4>
//                     <p className="text-muted-foreground">125 members</p>
//                   </div>
//                 </div>
//                 <Button variant="outline">Join</Button>
//               </div>
//               <Separator className="my-6" />
//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <Avatar>
//                     <AvatarImage src="/placeholder-user.jpg" />
//                     <AvatarFallback>JD</AvatarFallback>
//                   </Avatar>
//                   <div className="flex-1">
//                     <div className="flex items-center justify-between">
//                       <h4 className="font-semibold">John Doe</h4>
//                       <p className="text-xs text-muted-foreground">2 hours ago</p>
//                     </div>
//                     <p>
//                       Hey everyone, let's discuss the upcoming election for Polling Unit A. What are your thoughts on
//                       the candidates?
//                     </p>
//                     <div className="flex items-center gap-4 mt-2">
//                       <Button variant="ghost" size="icon">
//                         <HeartIcon className="w-4 h-4" />
//                         <span className="sr-only">Like</span>
//                       </Button>
//                       <Button variant="ghost" size="icon">
//                         <MessageCircleIcon className="w-4 h-4" />
//                         <span className="sr-only">Comment</span>
//                       </Button>
//                       <Button variant="ghost" size="icon">
//                         <ShareIcon className="w-4 h-4" />
//                         <span className="sr-only">Share</span>
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <Avatar>
//                     <AvatarImage src="/placeholder-user.jpg" />
//                     <AvatarFallback>JD</AvatarFallback>
//                   </Avatar>
//                   <div className="flex-1">
//                     <div className="flex items-center justify-between">
//                       <h4 className="font-semibold">Jane Doe</h4>
//                       <p className="text-xs text-muted-foreground">1 day ago</p>
//                     </div>
//                     <p>
//                       I think we should focus on increasing voter turnout in our polling unit. Any ideas on how to
//                       engage the community?
//                     </p>
//                     <div className="flex items-center gap-4 mt-2">
//                       <Button variant="ghost" size="icon">
//                         <HeartIcon className="w-4 h-4" />
//                         <span className="sr-only">Like</span>
//                       </Button>
//                       <Button variant="ghost" size="icon">
//                         <MessageCircleIcon className="w-4 h-4" />
//                         <span className="sr-only">Comment</span>
//                       </Button>
//                       <Button variant="ghost" size="icon">
//                         <ShareIcon className="w-4 h-4" />
//                         <span className="sr-only">Share</span>
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//             <CardFooter>
//               <form className="flex gap-2">
//                 <Textarea placeholder="Write a new post..." className="flex-1 min-h-[50px]" />
//                 <Button type="submit">Post</Button>
//               </form>
//             </CardFooter>
//           </Card>
//           <Card>
//             <CardHeader>
//               <CardTitle>John Doe</CardTitle>
//               <CardDescription>Member of Polling Unit A, Polling Unit B</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="flex items-center gap-4">
//                 <Avatar className="w-16 h-16">
//                   <AvatarImage src="/placeholder-user.jpg" />
//                   <AvatarFallback>JD</AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <h4 className="font-semibold">John Doe</h4>
//                   <p className="text-muted-foreground">Passionate about local elections and community engagement.</p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// }

// function HeartIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
//     </svg>
//   )
// }


// function MessageCircleIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
//     </svg>
//   )
// }


// function ShareIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
//       <polyline points="16 6 12 2 8 6" />
//       <line x1="12" x2="12" y1="2" y2="15" />
//     </svg>
//   )
// }


// function UsersIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//       <circle cx="9" cy="7" r="4" />
//       <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//       <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//     </svg>
//   )
// }