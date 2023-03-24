using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;

namespace Casting
{
    class Program
    {
        static void Main(string[] args)
        {

            /////////////////// UPCASTING
            //var streamReader = new StreamReader(new MemoryStream());

            //var list = new ArrayList();
            //list.Add(1);
            //list.Add("1");
            //list.Add(new Shape());

            //var anotherList = new List<Shape>();

            //////////////////// DOWNCASTING
            var shape = new Text();
            var text = (Text)shape;
        }
    }
}
