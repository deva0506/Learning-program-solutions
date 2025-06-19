package main;

import documents.Document;
import factories.DocumentFactory;
import factories.ExcelDocumentFactory;
import factories.PdfDocumentFactory;
import factories.WordDocumentFactory;

public class FactoryMethodTest {

	public static void main(String[] args) {
		 DocumentFactory wordFactory = new WordDocumentFactory();
	        Document word = wordFactory.createDocument();
	        word.open();

	        DocumentFactory pdfFactory = new PdfDocumentFactory();
	        Document pdf = pdfFactory.createDocument();
	        pdf.open();

	        DocumentFactory excelFactory = new ExcelDocumentFactory();
	        Document excel = excelFactory.createDocument();
	        excel.open();
	}

}
