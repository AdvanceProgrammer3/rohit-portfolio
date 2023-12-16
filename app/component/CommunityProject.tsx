import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

async function getData() {
  const res = await fetch(`https://fakestoreapi.com/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function CommunityProject() {
  const productList = await getData();
  const products = productList.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto pt-12 lg:pt-32 flex flex-col items-center ">
      <h3 className="text-center text-clip text-3xl font-bold p-4 pb-10">
        Top Some Project Created By Our Community
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:space-x-10 space-y-6 lg:space-y-0">
        {products.map((Product: any) => (
          <Card className="w-[350px]" key={Product.id}>
            <CardHeader>
              <CardTitle>{Product.title}</CardTitle>
              <CardDescription className="line-clamp-2">
                {Product.description}...
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <img src={Product.image} alt="" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href="#" className="text-blue-500">
                {Product.image}
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CommunityProject;
