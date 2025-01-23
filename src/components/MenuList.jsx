import { Menu } from "./Menu";

export function MenuList() {
    return(
        <div className="grid grid-cols-12 mt-8 h-scree">
            <div className="grid grid-flow-row  grid-cols-3 col-span-10 col-start-3 col-end-11 h-full w-full gap-x-4 gap-y-4">
                <Menu 
                    image={"src/assets/images/diffparfum.jpg"} 
                    name={"Diffuseur parfums"}  
                    menuId={1}
                />
                <Menu 
                    image={"src/assets/images/diffparfum.jpg"} 
                    name={"Diffuseur parfums"}  
                    menuId={2}
                />
                <Menu 
                    image={"src/assets/images/diffparfum.jpg"} 
                    name={"Diffuseur parfums"} 
                    menuId={3} 
                />
                
            </div>
        </div>
    );
}