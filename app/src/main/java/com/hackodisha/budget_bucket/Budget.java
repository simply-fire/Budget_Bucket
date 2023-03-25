package com.hackodisha.budget_bucket;

import android.content.Context;
import android.util.Log;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Budget {
    public static Integer Current_Budget;

    public static String AddBudgetData(String json_string, Context context){
        try {
            OutputStreamWriter outputStreamWriter = new OutputStreamWriter(context.openFileOutput("budget.json", Context.MODE_PRIVATE));
            outputStreamWriter.write(json_string);
            outputStreamWriter.close();
            return "Success";
        }
        catch (IOException e) {
            Log.e("Exception", "File write failed: " + e.toString());
            return "failed";

        }
    }
    public static String LoadBudgetData(Context context){
        String ret = "";

        try {
            InputStream inputStream = context.openFileInput("budget.json");

            if ( inputStream != null ) {
                InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
                BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
                String receiveString = "";
                StringBuilder stringBuilder = new StringBuilder();

                while ( (receiveString = bufferedReader.readLine()) != null ) {
                    stringBuilder.append("\n").append(receiveString);
                }

                inputStream.close();
                ret = stringBuilder.toString();
            }
        }
        catch (FileNotFoundException e) {
            Log.e("login activity", "File not found: " + e.toString());
        } catch (IOException e) {
            Log.e("login activity", "Can not read file: " + e.toString());
        }

        return ret;
    }
}
