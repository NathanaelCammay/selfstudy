﻿
using System;

namespace Constructors
{
    class Vehicle
    {
        private readonly string registrationNumber;

        //public Vehicle()
        //{
        //    Console.WriteLine("Vehicle is being initialized!");
        //}

        public Vehicle(string registrationNumber)
        {
            this.registrationNumber = registrationNumber;
            Console.WriteLine("Vehicle is being initialized. {0}", registrationNumber);
        }
    }
}
