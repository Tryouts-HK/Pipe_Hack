// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/wswZk4DylNK
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card"
// import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./carousel"
// import { CartesianGrid, XAxis, Bar, BarChart, Area, AreaChart, Line, LineChart } from "recharts"
// import { ChartTooltipContent, ChartTooltip, ChartContainer } from "./chart"

// export default function Component() {
//   return (
//     <div className="w-full max-w-6xl mx-auto py-8 px-4 md:px-6">
//       <h1 className="text-3xl font-bold mb-8">Election Results</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <Card>
//           <CardHeader>
//             <CardTitle>State: Enugu</CardTitle>
//             <CardDescription description="LGA: Nsukka"></CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <h3 className="text-lg font-semibold">Polling Unit: 001</h3>
//                 <div className="flex items-center justify-between">
//                   <div>Candidate A</div>
//                   <div>
//                     <span className="font-medium">120</span> (60%)
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div>Candidate B</div>
//                   <div>
//                     <span className="font-medium">80</span> (40%)
//                   </div>
//                 </div>
//                 <BarchartChart className="aspect-square" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold">LGA: Nsukka</h3>
//                 <div className="flex items-center justify-between">
//                   <div>Candidate A</div>
//                   <div>
//                     <span className="font-medium">2,500</span> (55%)
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div>Candidate B</div>
//                   <div>
//                     <span className="font-medium">2,000</span> (45%)
//                   </div>
//                 </div>
//                 <BarchartChart className="aspect-square" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold">Ward: Nsukka Central</h3>
//                 <div className="flex items-center justify-between">
//                   <div>Candidate A</div>
//                   <div>
//                     <span className="font-medium">1,200</span> (60%)
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div>Candidate B</div>
//                   <div>
//                     <span className="font-medium">800</span> (40%)
//                   </div>
//                 </div>
//                 <AreachartChart className="aspect-square" />
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>State: Anambra</CardTitle>
//             <CardDescription description="LGA: Awka"></CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <h3 className="text-lg font-semibold">Polling Unit: 002</h3>
//                 <div className="flex items-center justify-between">
//                   <div>Candidate A</div>
//                   <div>
//                     <span className="font-medium">150</span> (55%)
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div>Candidate B</div>
//                   <div>
//                     <span className="font-medium">120</span> (45%)
//                   </div>
//                 </div>
//                 <BarchartChart className="aspect-square" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold">LGA: Awka</h3>
//                 <div className="flex items-center justify-between">
//                   <div>Candidate A</div>
//                   <div>
//                     <span className="font-medium">3,000</span> (60%)
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div>Candidate B</div>
//                   <div>
//                     <span className="font-medium">2,000</span> (40%)
//                   </div>
//                 </div>
//                 <AreachartChart className="aspect-square" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold">Ward: Awka North</h3>
//                 <div className="flex items-center justify-between">
//                   <div>Candidate A</div>
//                   <div>
//                     <span className="font-medium">1,500</span> (55%)
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div>Candidate B</div>
//                   <div>
//                     <span className="font-medium">1,200</span> (45%)
//                   </div>
//                 </div>
//                 <BarchartChart className="aspect-square" />
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>State: Abia</CardTitle>
//             <CardDescription description="LGA: Umuahia"></CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <h3 className="text-lg font-semibold">Polling Unit: 003</h3>
//                 <div className="flex items-center justify-between">
//                   <div>Candidate A</div>
//                   <div>
//                     <span className="font-medium">180</span> (65%)
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div>Candidate B</div>
//                   <div>
//                     <span className="font-medium">100</span> (35%)
//                   </div>
//                 </div>
//                 <BarchartChart className="aspect-square" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold">LGA: Umuahia</h3>
//                 <div className="flex items-center justify-between">
//                   <div>Candidate A</div>
//                   <div>
//                     <span className="font-medium">2,800</span> (60%)
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div>Candidate B</div>
//                   <div>
//                     <span className="font-medium">1,900</span> (40%)
//                   </div>
//                 </div>
//                 <AreachartChart className="aspect-square" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold">Ward: Umuahia North</h3>
//                 <div className="flex items-center justify-between">
//                   <div>Candidate A</div>
//                   <div>
//                     <span className="font-medium">1,400</span> (65%)
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div>Candidate B</div>
//                   <div>
//                     <span className="font-medium">750</span> (35%)
//                   </div>
//                 </div>
//                 <BarchartChart className="aspect-square" />
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//       <div className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">Official Result Sheets</h2>
//         <Carousel>
//           <CarouselContent>
//             <CarouselItem>
//               <img
//                 src="/placeholder.svg"
//                 width={800}
//                 height={600}
//                 alt="Result Sheet 1"
//                 className="rounded-lg object-cover"
//               />
//             </CarouselItem>
//             <CarouselItem>
//               <img
//                 src="/placeholder.svg"
//                 width={800}
//                 height={600}
//                 alt="Result Sheet 2"
//                 className="rounded-lg object-cover"
//               />
//             </CarouselItem>
//             <CarouselItem>
//               <img
//                 src="/placeholder.svg"
//                 width={800}
//                 height={600}
//                 alt="Result Sheet 3"
//                 className="rounded-lg object-cover"
//               />
//             </CarouselItem>
//           </CarouselContent>
//           <CarouselPrevious onClick={} />
//           <CarouselNext onClick={} />
//         </Carousel>
//       </div>
//       <div className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">AI Analysis</h2>
//         <Card>
//           <CardContent>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <h3 className="text-lg font-semibold">Key Insights</h3>
//                 <ul className="list-disc pl-4 text-muted-foreground">
//                   <li>Candidate A has a strong lead in the state, winning the majority of LGAs and wards.</li>
//                   <li>Candidate B performed better in urban areas, while Candidate A dominated in rural regions.</li>
//                   <li>
//                     Voter turnout was higher than expected, indicating a high level of engagement from the electorate.
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold">Potential Implications</h3>
//                 <ul className="list-disc pl-4 text-muted-foreground">
//                   <li>
//                     The results suggest a clear mandate for Candidate A, who is likely to form the next government.
//                   </li>
//                   <li>
//                     Candidate B may need to re-evaluate their campaign strategy and focus on engaging with voters in
//                     rural areas.
//                   </li>
//                   <li>
//                     The high voter turnout could lead to increased political participation and civic engagement in the
//                     future.
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="mt-4">
//               <LinechartChart className="aspect-[16/9]" />
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }

// function AreachartChart(props: any) {
//   return (
//     <div {...props}>
//       <ChartContainer
//         config={{
//           desktop: {
//             label: "Desktop",
//             color: "hsl(var(--chart-1))",
//           },
//         }}
//         className="min-h-[300px]"
//       >
//         <AreaChart
//           accessibilityLayer
//           data={[
//             { month: "January", desktop: 186 },
//             { month: "February", desktop: 305 },
//             { month: "March", desktop: 237 },
//             { month: "April", desktop: 73 },
//             { month: "May", desktop: 209 },
//             { month: "June", desktop: 214 },
//           ]}
//           margin={{
//             left: 12,
//             right: 12,
//           }}
//         >
//           <CartesianGrid vertical={false} />
//           <XAxis
//             dataKey="month"
//             tickLine={false}
//             axisLine={false}
//             tickMargin={8}
//             tickFormatter={(value) => value.slice(0, 3)}
//           />
//           <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
//           <Area
//             dataKey="desktop"
//             type="natural"
//             fill="var(--color-desktop)"
//             fillOpacity={0.4}
//             stroke="var(--color-desktop)"
//           />
//         </AreaChart>
//       </ChartContainer>
//     </div>
//   )
// }


// function BarchartChart(props: any) {
//   return (
//     <div {...props}>
//       <ChartContainer
//         config={{
//           desktop: {
//             label: "Desktop",
//             color: "hsl(var(--chart-1))",
//           },
//         }}
//         className="min-h-[300px]"
//       >
//         <BarChart
//           accessibilityLayer
//           data={[
//             { month: "January", desktop: 186 },
//             { month: "February", desktop: 305 },
//             { month: "March", desktop: 237 },
//             { month: "April", desktop: 73 },
//             { month: "May", desktop: 209 },
//             { month: "June", desktop: 214 },
//           ]}
//         >
//           <CartesianGrid vertical={false} />
//           <XAxis
//             dataKey="month"
//             tickLine={false}
//             tickMargin={10}
//             axisLine={false}
//             tickFormatter={(value) => value.slice(0, 3)}
//           />
//           <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
//           <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
//         </BarChart>
//       </ChartContainer>
//     </div>
//   )
// }


// function LinechartChart(props: any) {
//   return (
//     <div {...props}>
//       <ChartContainer
//         config={{
//           desktop: {
//             label: "Desktop",
//             color: "hsl(var(--chart-1))",
//           },
//         }}
//       >
//         <LineChart
//           accessibilityLayer
//           data={[
//             { month: "January", desktop: 186 },
//             { month: "February", desktop: 305 },
//             { month: "March", desktop: 237 },
//             { month: "April", desktop: 73 },
//             { month: "May", desktop: 209 },
//             { month: "June", desktop: 214 },
//           ]}
//           margin={{
//             left: 12,
//             right: 12,
//           }}
//         >
//           <CartesianGrid vertical={false} />
//           <XAxis
//             dataKey="month"
//             tickLine={false}
//             axisLine={false}
//             tickMargin={8}
//             tickFormatter={(value) => value.slice(0, 3)}
//           />
//           <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
//           <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
//         </LineChart>
//       </ChartContainer>
//     </div>
//   )
// }








// import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card";
// import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./carousel";
import { CartesianGrid, XAxis, Bar, BarChart, Area, AreaChart } from "recharts";
import { ChartTooltip } from "./chart";

export default function Result () {
  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-8">Election Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>State: Enugu</CardTitle>
            <CardDescription description="LGA: Nsukka"></CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold">Polling Unit: 001</h3>
                <div className="flex items-center justify-between">
                  <div>Candidate A</div>
                  <div>
                    <span className="font-medium">120</span> (60%)
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Candidate B</div>
                  <div>
                    <span className="font-medium">80</span> (40%)
                  </div>
                </div>
                <BarchartChart className="aspect-square" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">LGA: Nsukka</h3>
                <div className="flex items-center justify-between">
                  <div>Candidate A</div>
                  <div>
                    <span className="font-medium">2,500</span> (55%)
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Candidate B</div>
                  <div>
                    <span className="font-medium">2,000</span> (45%)
                  </div>
                </div>
                <BarchartChart className="aspect-square" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Ward: Nsukka Central</h3>
                <div className="flex items-center justify-between">
                  <div>Candidate A</div>
                  <div>
                    <span className="font-medium">1,200</span> (60%)
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Candidate B</div>
                  <div>
                    <span className="font-medium">800</span> (40%)
                  </div>
                </div>
                <AreachartChart className="aspect-square" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>State: Anambra</CardTitle>
            <CardDescription description="LGA: Awka"></CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold">Polling Unit: 002</h3>
                <div className="flex items-center justify-between">
                  <div>Candidate A</div>
                  <div>
                    <span className="font-medium">150</span> (55%)
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Candidate B</div>
                  <div>
                    <span className="font-medium">120</span> (45%)
                  </div>
                </div>
                <BarchartChart className="aspect-square" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">LGA: Awka</h3>
                <div className="flex items-center justify-between">
                  <div>Candidate A</div>
                  <div>
                    <span className="font-medium">3,000</span> (60%)
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Candidate B</div>
                  <div>
                    <span className="font-medium">2,000</span> (40%)
                  </div>
                </div>
                <AreachartChart className="aspect-square" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Ward: Awka North</h3>
                <div className="flex items-center justify-between">
                  <div>Candidate A</div>
                  <div>
                    <span className="font-medium">1,500</span> (55%)
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Candidate B</div>
                  <div>
                    <span className="font-medium">1,200</span> (45%)
                  </div>
                </div>
                <BarchartChart className="aspect-square" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>State: Abia</CardTitle>
            <CardDescription description="LGA: Umuahia"></CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold">Polling Unit: 003</h3>
                <div className="flex items-center justify-between">
                  <div>Candidate A</div>
                  <div>
                    <span className="font-medium">100</span> (50%)
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Candidate B</div>
                  <div>
                    <span className="font-medium">100</span> (50%)
                  </div>
                </div>
                <BarchartChart className="aspect-square" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">LGA: Umuahia</h3>
                <div className="flex items-center justify-between">
                  <div>Candidate A</div>
                  <div>
                    <span className="font-medium">2,800</span> (53%)
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Candidate B</div>
                  <div>
                    <span className="font-medium">2,500</span> (47%)
                  </div>
                </div>
                <AreachartChart className="aspect-square" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Ward: Umuahia South</h3>
                <div className="flex items-center justify-between">
                  <div>Candidate A</div>
                  <div>
                    <span className="font-medium">1,100</span> (55%)
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Candidate B</div>
                  <div>
                    <span className="font-medium">900</span> (45%)
                  </div>
                </div>
                <BarchartChart className="aspect-square" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const BarchartChart = ({ }: { className: string }) => (
  <BarChart width={150} height={40} data={[{ name: "A", uv: 4000, pv: 2400, amt: 2400 }]}>
    <CartesianGrid  strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <ChartTooltip cursor={false} content={{ indicator: "bar", content: <div>Tooltip Content</div> }} />
    <Bar dataKey="pv" fill="#8884d8" />
  </BarChart>
);

const AreachartChart = ({ }: { className: string }) => (
  <AreaChart width={150} height={40} data={[{ name: "A", uv: 4000, pv: 2400, amt: 2400 }]}>
    <CartesianGrid  strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <ChartTooltip cursor={false} content={{ indicator: "area", content: <div>Tooltip Content</div> }} />
    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
  </AreaChart>
);
