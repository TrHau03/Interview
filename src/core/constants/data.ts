export interface DataType {
  id: string;
  label: string;
  status: string;
  deadline: string;
  progress1: number;
  progress2: number;
}

export const data = [
  {
    id: "LSX-13032514",
    label: "Chưa sản xuất",
    status: "unDone",
    deadline: "13/03/2025",
    progress1: 40,
    progress2: 80,
  },
  {
    id: "LSX-13032515",
    label: "Chưa sản xuất",
    status: "unDone",
    deadline: "13/03/2025",
    progress1: 60,
    progress2: 40,
  },
  {
    id: "LSX-13032516",
    label: "Chưa sản xuất",
    status: "unDone",
    deadline: "13/03/2025",
    progress1: 45,
    progress2: 100,
  },
  {
    id: "LSX-13032517",
    label: "Chưa sản xuất",
    status: "inProgress",
    deadline: "13/03/2025",
    progress1: 55,
    progress2: 40,
  },
  {
    id: "LSX-13032518",
    label: "Chưa sản xuất",
    status: "done",
    deadline: "13/03/2025",
    progress1: 55,
    progress2: 40,
  },
];
