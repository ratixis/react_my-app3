using System;
using System.IO;
using System.IO.Compression;
using System.Reflection.PortableExecutable;

namespace FindImageByDate
{
	class Program
	{
		static void Main(string[] args)
		{
			//Console.WriteLine("Введите дату:");
			//string date = Console.ReadLine();
			//string filename = $"{date}.tif";

			string path = @"C:\Images\"; // путь к папке с изображениями
			
			int i = 0;
			using (StreamReader reader = new StreamReader(path + "test.txt"))
			{
				string? line;
				while ((line = reader.ReadLine()) != null)
				{
					//Console.WriteLine(path + line + ".tif");
					string curFile = path + line + ".tif";
					if (File.Exists(curFile))
					{
						//Console.WriteLine(curFile);
						
						i++;
					}
					else
					{
						Console.WriteLine(curFile + " Файл не существует!!!");
					}
					
				}
			}
			string[] files = new string[i];
			i = 0;
			using (StreamReader reader = new StreamReader(path + "test.txt"))
			{
				string? line;
				while ((line = reader.ReadLine()) != null)
				{
					//Console.WriteLine(path + line + ".tif");
					string curFile = path + line + ".tif";
					if (File.Exists(curFile))
					{
						//Console.WriteLine(curFile);
						files[i] = curFile;
						i++;
					}

				}
			}
			using (var fileStream = new FileStream(path + "result.zip", FileMode.Create))
			using (var archive = new ZipArchive(fileStream, ZipArchiveMode.Create))
			{
				foreach (string file1 in files)
				{
					Console.WriteLine("Загружен файл:"+file1);
					archive.CreateEntryFromFile(file1, file1.Replace(path, ""));
				}
				
			}
			
			/*string[] files = Directory.GetFiles(folderPath, filename); // получаем список файлов с расширением .tif

			if (files.Length == 0)
			{
				Console.WriteLine($"Файл {filename} не найден");
			}
			foreach (string file in files)
			{
				Console.WriteLine(file);
				
				/*if (File.Exists(filename))
				{
					Console.WriteLine(Path.GetFileName(filename)); // выводим имя файла на экран
				}
				else
				{
					Console.WriteLine($"Файл {filename} не найден");
				}*/
		}

			//Console.ReadLine();
		
	}
}

