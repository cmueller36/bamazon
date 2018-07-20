create database bamazon;

create table dbo.products 
(
    [item_id] int identity(1,1) primary key,
    [product_name] nvarchar(255) not null,
    [department_name] nvarchar(255) not null,
    [price] float
);

insert into dbo.products (product_name,department_name,price)
values ('bicycle','sporting goods',200),
('rifle','hunting',150),
('backpack','hiking',100),
('sweater','clothing',20),
('jeans','clothing',50),
('sunglasses','accessories',25);

select * from dbo.products


