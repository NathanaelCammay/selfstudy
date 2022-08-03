using System;

namespace Decisions_Lesson
{
    internal class Program
    {
        static void Main(string[] args)
        {

            // We use the tryParse method to explicitly convert a string to int
            string numberAsString = "128"; // This is the string number that needs to be converted

            // you create a variable to store the new "parsed" value.
            int parsedValue;
            bool success = int.TryParse(numberAsString, out parsedValue);

            if (success)
            {
                Console.WriteLine("Parsing was successful!");
            }
            else
            {
                Console.WriteLine("Unfortunately, parsing was NOT successful!");
            }

            Console.Read();
        }
    }
}