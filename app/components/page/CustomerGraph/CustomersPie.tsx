"use client"
import { useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { useFetchForCustomersGraph } from '@/lib/useFetchData';
import useDashboardStore from '@/store/dashboardStore';
import useCalculationStore from '@/store/calculationStore';

type PieProps = {
  colors: string[];
}

const renderActiveShape = (props :any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  return (
    <g>
      <text x={cx} y={cy - 13} dy={8} textAnchor="middle" fill="#6b7280">
        {payload.name}
      </text>
      <text x={cx - 22} y={cy + 10} dy={8} textAnchor="middle" fill="#6b7280">
        {`${value}客`}
      </text>
      <text x={cx + 25} y={cy + 10} dy={8} textAnchor="middle" fill="#1f2937">
        {`${(percent * 100).toFixed(1)}%`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 12}
        outerRadius={outerRadius + 18}
        fill={fill}
      />
    </g>
  );
};

export default function CustomersPie({colors} :PieProps ) {
  useFetchForCustomersGraph();

  const [activeIndex, setActiveIndex] = useState(0);
  const { options } = useCalculationStore();
  const { customersRecord } = useDashboardStore();

  const chartData = Object.entries(customersRecord).map(([id, count]) => {
    const option = options.find(type => type.value.toString() === id);
    const typeName = option ? option.label : '不明';
  
    return { name: typeName, value: count };
  });

  const onPieEnter = (_ :any, index :number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col justify-center max-w-xs">
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={chartData}
              innerRadius={70}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={onPieEnter}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}