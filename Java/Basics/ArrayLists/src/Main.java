import java.util.ArrayList;
import java.util.Arrays;
//package com.company;


public class Main {
    public static void main(String[] args) {

//        ArrayList<String> food = new ArrayList<String>();
//
//        food.add("pizza");
//        food.add("Hamburger");
//        food.add("hot dog");
//        food.set(0, "sushi");
//        for(int i = 0; i < food.size(); i++){
//            System.out.println(food.get(i));
//        }
//        System.out.println(food);
//
//        String[] arr = {"Mango", "Bannana", "Apple"};
//        System.out.println(Arrays.toString(arr));
//        food.clear();

//        2D array list -
        ArrayList<ArrayList<String>> groceryList = new ArrayList<>();

        ArrayList<String> foodList = new ArrayList<>();
        foodList.add("Hamburger");
        foodList.add("Pasta");

        ArrayList<String> drinkList = new ArrayList<>();
        drinkList.add("coke");
        drinkList.add("Sprite");

        groceryList.add(foodList);
        groceryList.add(drinkList);
        System.out.println(groceryList);



    }
}