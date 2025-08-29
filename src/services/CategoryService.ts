import {Category} from "@/models/Category";
import {getId, getStore, setStore} from "@/store/Store";

export default function createCategory(categoryName: string): Category {
    const category = new Category(getId("category"), categoryName, 0, 0);

    const stored = getStore("categories");
    let categories: Category[] = stored ? JSON.parse(stored) as Category[] : [];

    categories.push(category);

    setStore("categories", JSON.stringify(categories));

    return category;
}

export function getCategories(): Category[] {
    const stored = getStore("categories");
    const categories: Category[] = [];

    if (!stored) return categories;

    try {
        const parsed = JSON.parse(stored) as any[];
        for (let i = 0; i < parsed.length; i++) {
            const c = parsed[i];

            categories.push(new Category(c._id, c._name, c._incomePercentage, c._balance));
        }
        return categories;
    } catch (e) {
        console.error("Error parsing categories from localStorage:", e);
        return [];
    }
}