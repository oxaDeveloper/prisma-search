import { prisma } from "../db";

export const getData = async (query: string) => {
  const employees = await prisma.employee.findMany({
    where: {
      name: {
        startsWith: query,
        mode: "insensitive",
      },
    },
  });
  return employees;
};

export const createData = async ({
  name,
  email,
  phone,
}: {
  name: string;
  email: string;
  phone: string;
}) => {
  const employee = await prisma.employee.create({
    data: {
      name,
      email,
      phone,
    },
  });
  return employee;
};

export const deleteData = async (id: string) => {
  const employee = await prisma.employee.delete({
    where: {
      id,
    },
  });
  return employee;
};
