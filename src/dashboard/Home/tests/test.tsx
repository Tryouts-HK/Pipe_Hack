// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/rauuJ4pm6cN
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import Link from "next/link"
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

// export default function Component() {
//   return (
//     <div className="flex flex-col h-full">
//       <header className="bg-primary text-primary-foreground py-4 px-6">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <VoteIcon className="w-6 h-6" />
//             <h1 className="text-2xl font-bold">Election Monitor</h1>
//           </div>
//           <Link
//             href="#"
//             className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//             prefetch={false}
//           >
//             View Full Report
//           </Link>
//         </div>
//       </header>
//       <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//         <Card>
//           <CardHeader>
//             <CardTitle>Voter Turnout</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-4xl font-bold">72%</div>
//             <p className="text-muted-foreground">Of registered voters have cast their ballots.</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>Ballot Count</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-4xl font-bold">3,456,789</div>
//             <p className="text-muted-foreground">Ballots have been counted so far.</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>Polling Stations</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-4xl font-bold">98%</div>
//             <p className="text-muted-foreground">Of polling stations are currently operational.</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>Voter Complaints</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-4xl font-bold">124</div>
//             <p className="text-muted-foreground">Voter complaints have been reported so far.</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>Election Observers</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-4xl font-bold">1,234</div>
//             <p className="text-muted-foreground">Election observers are monitoring the process.</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>Voter Registrations</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-4xl font-bold">6,789,012</div>
//             <p className="text-muted-foreground">Voters have registered for this election.</p>
//           </CardContent>
//         </Card>
//       </main>
//     </div>
//   )
// }

// function VoteIcon(props) {
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
//       <path d="m9 12 2 2 4-4" />
//       <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
//       <path d="M22 19H2" />
//     </svg>
//   )
// }







// import { fontFamily } from "tailwindcss/defaultTheme";

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./components/**/*.{js,ts,jsx,tsx}",
//     "./app/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         heading: ['var(--font-heading)', ...fontFamily.sans],
//         body: ['var(--font-body)', ...fontFamily.sans]
//       },
//       colors: {
//         border: 'hsl(var(--border))',
//         input: 'hsl(var(--input))',
//         ring: 'hsl(var(--ring))',
//         background: 'hsl(var(--background))',
//         foreground: 'hsl(var(--foreground))',
//         primary: {
//           DEFAULT: 'hsl(var(--primary))',
//           foreground: 'hsl(var(--primary-foreground))'
//         },
//         secondary: {
//           DEFAULT: 'hsl(var(--secondary))',
//           foreground: 'hsl(var(--secondary-foreground))'
//         },
//         destructive: {
//           DEFAULT: 'hsl(var(--destructive))',
//           foreground: 'hsl(var(--destructive-foreground))'
//         },
//         muted: {
//           DEFAULT: 'hsl(var(--muted))',
//           foreground: 'hsl(var(--muted-foreground))'
//         },
//         accent: {
//           DEFAULT: 'hsl(var(--accent))',
//           foreground: 'hsl(var(--accent-foreground))'
//         },
//         popover: {
//           DEFAULT: 'hsl(var(--popover))',
//           foreground: 'hsl(var(--popover-foreground))'
//         },
//         card: {
//           DEFAULT: 'hsl(var(--card))',
//           foreground: 'hsl(var(--card-foreground))'
//         },
//       },
//       borderRadius: {
//         xl: `calc(var(--radius) + 4px)`,
//         lg: `var(--radius)`,
//         md: `calc(var(--radius) - 2px)`,
//         sm: `calc(var(--radius) - 4px)`
//       },
//       keyframes: {
//         "accordion-down": {
//           from: { height: 0 },
//           to: { height: "var(--radix-accordion-content-height)" }
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: 0 }
//         }
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out"
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// };
