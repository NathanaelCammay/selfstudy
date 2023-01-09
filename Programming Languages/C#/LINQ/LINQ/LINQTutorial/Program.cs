using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace LINQTutorial
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //QueryIntArray();
            //QueryStringArray();
            Console.ReadLine();
        }

        static void QueryStringArray()
        {
            string[] dogs = {"K 9", "Brian Griffin",
            "Scooby Doo", "Old Yeller", "Rin Tin Tin",
            "Benji", "Charlie B. Barkin", "Lassie",
            "Snoopy"};

            // create a link query that finds values in dog array that contain spaces, and set them in ascending order
            var dogSpaces = from dog in dogs
                            where dog.Contains(" ")
                            orderby dog ascending
                            select dog;

            foreach (var dog in dogSpaces)
            {
                Console.WriteLine(dog);
            }
        }

        static int[] QueryIntArray()
        {
            int[] nums = { 5, 10, 15, 20, 25, 30, 35 };

            // create a linq query that finds numbers in array bigger than 20

            var greaterthan20 = from num in nums
                                where num > 20
                                orderby num
                                select num;
            
            foreach (var num in greaterthan20)
            {
                Console.WriteLine(num);
            }
            //get the type of object
            Console.WriteLine($"Get Type: {greaterthan20.GetType()}");

            //convert to a list
            var list = greaterthan20.ToList<int>();

            //convert to an array
            var array = greaterthan20.ToArray();

            nums[0] = 40;
            foreach (var i in greaterthan20)
            {
                Console.WriteLine(i);
            }

            return array;

        }

        static void QueryArrayList()
        {
            ArrayList famAnimals = new ArrayList()
            {
                new Animal{Name = "Heidi",
                Height = .8,
                Weight = 18},

                new Animal
                {
                    Name = "Shrek",
                    Height = 4,
                    Weight = 130
                },

                new Animal
                {
                    Name = "Congo",
                    Height = 3.8,
                    Weight = 90
                }
            };

            // You have to convert the ArrayList into 
            // an IEnumerable
            var famAnimalEnum = famAnimals.OfType<Animal>();

            var smAnimals = from animal in famAnimalEnum
                            where animal.Weight <= 90
                            orderby animal.Name
                            select animal;

            foreach (var animal in smAnimals)
            {
                Console.WriteLine("{0} weighs {1}lbs",
                    animal.Name, animal.Weight);
            }

            Console.WriteLine();

        }


    }
    }

