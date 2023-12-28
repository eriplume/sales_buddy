"use client"
import { useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import useDashboardStore from '@/store/dashboardStore';
import useCalculationStore from '@/store/calculationStore';
import { useFetchCustomerRecords } from '@/lib/useFetchData';

// const data = [
//   { name: '主婦', value: 25 },
//   { name: 'OL', value: 15 },
//   { name: '~30代', value: 10 },
//   { name: '〜50代', value: 5 },
//   { name: '学生', value: 5 },
//   { name: '顧客', value: 7 },
//   { name: 'ギフト', value: 3 },
//   { name: 'その他', value: 30 },
// ];

const COLORS = [ '#0369a1', '#60a5fa','#93c5fd','#bfdbfe', '#dbeafe','#cbd5e1', '#e0e7ff','#c7d2fe'];

const renderActiveShape = (props :any) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#333">
        {payload.name}
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
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${value}客`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(${(percent * 100).toFixed(1)}%)`}
      </text>
    </g>
  );
};

export default function CustomersPie() {
  useFetchCustomerRecords();

  const [activeIndex, setActiveIndex] = useState(0);
  const { options } = useCalculationStore();
  const { customersRecord } = useDashboardStore();

  const chartData = Object.entries(customersRecord).map(([id, count]) => {
    const option = options.find(type => type.value.toString() === id);
    const typeName = option ? option.label : '不明';
  
    return { name: typeName, value: count };
  });

  const onPieEnter = (_ :any, index :any) => {
    setActiveIndex(index);
  };

  return (
    <PieChart width={800} height={400}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={chartData}
        cx={400}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}