import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BiSolidCategoryAlt } from "react-icons/bi";
import { TbTransactionRupee } from "react-icons/tb";
import { RiMessage2Fill } from "react-icons/ri";
import { MdPersonAddAlt1,MdModeEditOutline } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import {
    FaTh,
    FaUserAlt,
    FaBars,
    FaShoppingBag,
    FaThList,
    FaListUl,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Product from '../pages/OrderList';
import Comment from '../pages/Comment';
import OrderList from '../pages/OrderList';
import Header from './Header';
import UserAdd from '../pages/UserAdd';
import DisplayUserDaata from '../pages/DisplayUserData';
import CategoryAdd from '../pages/CategoryAdd';
import DisplayCategoryData from '../pages/DisplayCategoryData';
import ProductAdd from '../pages/ProductAdd';
import DisplayProductData from '../pages/DisplayProductData';
import Dashboard from '../pages/Dashboard';
const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null); // Tracks which menu's children are visible
    
   
    const toggle = () => setIsOpen(!isOpen);

    // Menu Items with Parent and Children
    const menuItems = [
        {
            path: "/dashboard/dashboard",
            name: "Dashboard",
            icon: <FaTh />,
            children: [] // No children for Dashboard
        },
        {
            path: "/",
            name: "User",
            icon: <FaUserAlt />,
            children: [
                { path: "/dashboard/user", name: "Add",icon:<MdPersonAddAlt1/> },
                { path: "/dashboard/show_table_user", name: "Show All",icon:<FaListUl/>  },
                // { path: "/about/update", name: "Show Specific",icon:<FaListUl/>  },
                
            ]
        },
        {
            path: "/dashboard/comment",
            name: "Category",
            icon: <BiSolidCategoryAlt />,
            children: [
                { path: "/dashboard/category", name: "Add",icon:<MdAdd/> },
                { path: "/dashboard/show_table_category", name: "Show All",icon:<FaListUl/> },
                
            ]
        },
        {
            path: "/dashboard/product",
            name: "Product",
            icon: <FaShoppingBag />,
            children: [
                { path: "/dashboard/product", name: "Add",icon:<MdAdd/> },
                { path: "/dashboard/show_all_product", name: "Show All",icon:<FaListUl/> },
               
            ]
        },
        {
            path: "/dashboard/orderList",
            name: "Order",
            icon: <FaThList />,
            children: [] // No children for Product List
        },
        // {
        //     path: "/dashboard/productList",
        //     name: "Cart",
        //     icon: <FaShoppingCart />,
        //     children: [] // No children for Product List
        // }
        ,
        {
            path: "/dashboard/productList",
            name: "Transaction",
            icon: <TbTransactionRupee />,
            children: [] // No children for Product List
        }
        ,
        {
            path: "/dashboard/productList",
            name: "User Query",
            icon: <RiMessage2Fill />,
            children: [] // No children for Product List
        }
    ];

    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
                        <img
                            width={"40px"}
                            className="image"
                            src="https://media.licdn.com/dms/image/v2/C560BAQEYKJcT2CI0sA/company-logo_200_200/company-logo_200_200/0/1649310777141?e=2147483647&v=beta&t=kuprB5_4a2b1FIy7QXWI_sWwHQAkJ4fWHcQtrwpivqM"
                        />
                    </h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {menuItems.map((menu, index) => (
                    <div key={index}>
                        <NavLink
                            to={menu.children.length ? "#" : menu.path} // Parent menus with children won't navigate
                            className="link"
                            activeclassName="active"
                            onClick={
                                menu.children.length
                                    ? (e) => {
                                        e.preventDefault();
                                        setActiveMenu(activeMenu === index ? null : index);
                                    }
                                    : null
                            }
                        >
                            <div className="icon">{menu.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
                                {menu.name}
                            </div>
                        </NavLink>

                        {/* Render Children If Menu Has Children */}
                        {menu.children.length > 0 && activeMenu === index && (
                            <ul className="sub_menu">
                                {menu.children.map((child, childIndex) => (
                                    <li key={childIndex}  >
                                        <NavLink to={child.path} className="sub_link">
                                           <span style={{marginRight:"20px"}}>{child.icon}</span> {isOpen?child.name:''}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>





            <main style={{padding:0}}>
                <Header/>
                <Routes>
                    {/* Parent Routes */}
                    <Route element={<UserAdd />} path="/user" />
                    <Route element={<DisplayUserDaata />} path="/show_table_user" />
                    <Route element={<CategoryAdd />} path="/category" />
                    <Route element={<DisplayCategoryData />} path="/show_table_category" />
                    <Route element={<ProductAdd />} path="/product" />
                    <Route element={<DisplayProductData />} path="/show_all_product" />
                    <Route element={<Dashboard />} path="/dashboard" />



                    <Route element={<Product />} path="/product_show" />
                    <Route path="/comment" element={<Comment />} />
                    <Route path="/orderList" element={<OrderList />} />

                    
                </Routes>
            </main>
        </div>
    );
};

export default Sidebar;
