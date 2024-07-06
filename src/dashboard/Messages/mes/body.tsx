
// import Link from "next/link"
// import { Card } from "@/components/ui/card"
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"

// export default function Component() {
//   return (
//     <div className="flex flex-col min-h-[100dvh] bg-background">
//       <header className="px-4 lg:px-6 h-14 flex items-center border-b">
//         <Link href="#" className="flex items-center justify-center" prefetch={false}>
//           <AmbulanceIcon className="h-6 w-6 text-primary" />
//           <span className="sr-only">Emergency Services</span>
//         </Link>
//         <nav className="ml-auto flex gap-4 sm:gap-6">
//           <Link
//             href="#"
//             className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
//             prefetch={false}
//           >
//             Police
//           </Link>
//           <Link
//             href="#"
//             className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
//             prefetch={false}
//           >
//             Ambulance
//           </Link>
//           <Link
//             href="#"
//             className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
//             prefetch={false}
//           >
//             Fire
//           </Link>
//         </nav>
//       </header>
//       <main className="flex-1 flex flex-col">
//         <section className="px-4 py-8 md:px-6 md:py-12 flex flex-col gap-8">
//           <div className="space-y-2">
//             <h2 className="text-2xl font-bold">Messages</h2>
//             <p className="text-muted-foreground">View and send messages to emergency services.</p>
//           </div>
//           <div className="grid grid-cols-1 gap-4">
//             <Card className="p-4 flex flex-col gap-4">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <Avatar className="w-8 h-8 border">
//                     <AvatarImage src="/placeholder-user.jpg" />
//                     <AvatarFallback>P</AvatarFallback>
//                   </Avatar>
//                   <div className="text-sm font-medium">Police</div>
//                 </div>
//                 <div className="text-xs text-muted-foreground">10:45 AM</div>
//               </div>
//               <p className="text-muted-foreground">
//                 "I need police assistance immediately. My location is 123 Main St."
//               </p>
//               <div className="flex items-center justify-between">
//                 <Button variant="ghost" size="icon">
//                   <MessageCircleIcon className="w-4 h-4" />
//                   <span className="sr-only">Reply</span>
//                 </Button>
//                 <Button variant="ghost" size="icon">
//                   <TrashIcon className="w-4 h-4" />
//                   <span className="sr-only">Delete</span>
//                 </Button>
//               </div>
//             </Card>
//             <Card className="p-4 flex flex-col gap-4">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <Avatar className="w-8 h-8 border">
//                     <AvatarImage src="/placeholder-user.jpg" />
//                     <AvatarFallback>A</AvatarFallback>
//                   </Avatar>
//                   <div className="text-sm font-medium">Ambulance</div>
//                 </div>
//                 <div className="text-xs text-muted-foreground">9:30 AM</div>
//               </div>
//               <p className="text-muted-foreground">
//                 "I need an ambulance right away. Someone is injured at 456 Oak Rd."
//               </p>
//               <div className="flex items-center justify-between">
//                 <Button variant="ghost" size="icon">
//                   <MessageCircleIcon className="w-4 h-4" />
//                   <span className="sr-only">Reply</span>
//                 </Button>
//                 <Button variant="ghost" size="icon">
//                   <TrashIcon className="w-4 h-4" />
//                   <span className="sr-only">Delete</span>
//                 </Button>
//               </div>
//             </Card>
//             <Card className="p-4 flex flex-col gap-4">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <Avatar className="w-8 h-8 border">
//                     <AvatarImage src="/placeholder-user.jpg" />
//                     <AvatarFallback>F</AvatarFallback>
//                   </Avatar>
//                   <div className="text-sm font-medium">Fire</div>
//                 </div>
//                 <div className="text-xs text-muted-foreground">8:15 AM</div>
//               </div>
//               <p className="text-muted-foreground">
//                 "There is a fire at my location. Please send fire department immediately."
//               </p>
//               <div className="flex items-center justify-between">
//                 <Button variant="ghost" size="icon">
//                   <MessageCircleIcon className="w-4 h-4" />
//                   <span className="sr-only">Reply</span>
//                 </Button>
//                 <Button variant="ghost" size="icon">
//                   <TrashIcon className="w-4 h-4" />
//                   <span className="sr-only">Delete</span>
//                 </Button>
//               </div>
//             </Card>
//           </div>
//         </section>
//       </main>
//       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
//         <p className="text-xs text-muted-foreground">&copy; 2024 Emergency Services. All rights reserved.</p>
//         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
//           <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground" prefetch={false}>
//             Terms of Service
//           </Link>
//           <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground" prefetch={false}>
//             Privacy
//           </Link>
//         </nav>
//       </footer>
//     </div>
//   )
// }

// function AmbulanceIcon(props) {
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
//       <path d="M10 10H6" />
//       <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
//       <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" />
//       <path d="M8 8v4" />
//       <path d="M9 18h6" />
//       <circle cx="17" cy="18" r="2" />
//       <circle cx="7" cy="18" r="2" />
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


// function TrashIcon(props) {
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
//       <path d="M3 6h18" />
//       <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
//       <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
//     </svg>
//   )
// }