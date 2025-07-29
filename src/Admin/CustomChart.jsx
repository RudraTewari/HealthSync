import React from "react";
import { AreaChart, ResponsiveContainer, Area, XAxis, YAxis, Tooltip, } from "recharts";




const CustomChart = ({ data, areaKey, areaColor, xkey, ylabel}) => {
    return (
        <>
            <div className="w-full h-full "> 
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <XAxis dataKey={xkey} hide={true} />
                        <YAxis hide={true} />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey={areaKey}
                            stroke={areaColor}
                            fill={areaColor}
                            strokeWidth={2}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

        </>
    )
}

export default CustomChart