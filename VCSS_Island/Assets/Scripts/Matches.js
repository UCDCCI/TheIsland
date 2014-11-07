function OnTriggerEnter(col : Collider)
	{
		if(col.gameObject.tag == "Player")
			{
				col.gameObject.SendMessage("MatchPickup");
				Destroy(gameObject);
			}
	}