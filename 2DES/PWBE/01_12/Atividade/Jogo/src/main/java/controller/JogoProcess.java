package controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class JogoProcess {
	PreparedStatement ps;
	Connection con;
	ResultSet rs;
	
	public JogoProcess() {
		this.con = ConnectionDB.getConnection();
	}
	
	public JSONArray read() {
		JSONArray arr = new JSONArray();
		
		String query = "select * from sorteio";
		
		try {
			ps = con.prepareStatement(query);
			
			rs = ps.executeQuery();
			
			while(rs.next()) {
			
				JSONObject obj = new JSONObject();
				
				try {
					obj.put("bicho", rs.getString("bicho"));
					obj.put("dataJogo", rs.getString("data"));
					obj.put("id", rs.getInt("id"));
					
					arr.put(obj);
				} catch (JSONException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
			}
			
			ps.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return arr;
	}
}
