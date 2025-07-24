
import {
  RadarChart as RechartsRadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

type RadarChartProps = {
  data: {
    subcategory: string;
    score: number;
  }[];
}

export default function SoftSkillsRadarChart({ data }: RadarChartProps){
    return (
        <>
        <ResponsiveContainer width="100%" height={300}>
            <RechartsRadarChart data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subcategory" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                  name="Soft Skills"
                  dataKey="score"
                  stroke="#f97316"
                  fill="#f97316"
                  fillOpacity={0.6}
                />
            </RechartsRadarChart>
        </ResponsiveContainer>
        </>
    );
}
